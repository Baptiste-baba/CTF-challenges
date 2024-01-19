var express = require("express");
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoStore = require('connect-mongo');

var app = express();
const router = express.Router();

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

const mongoURL = 'mongodb+srv://baba:mot_de_passe@ctf0.yj3zibd.mongodb.net/?retryWrites=true&w=majority';

// Configuration de la session
app.use(session({
    secret: 'VotreSecretIci', // Remplacez par un secret de votre choix
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: mongoURL })
}));

router.get("/", function (req, res) {
    res.render('index');
});

router.get("/register", function (req, res) {
    res.render('register');
});

// route pour la page home
router.get("/home", function (req, res) {
    if (req.session.user) {
        const message = req.session.message || '';
        // Effacer le message de la session après l'avoir récupéré
        delete req.session.message;

        res.render('home', { username: req.session.user.username, message: message });
    } else {
        res.redirect('/login');
    }
});

app.post('/register', async function (req, res) {
    try {
        const userData = req.body;
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const client = new MongoClient(mongoURL);
        await client.connect();
        const db = client.db('users');
        const collection = db.collection('users.user');

        const existingUser = await collection.findOne({ usernamhe: userData.username });

        if (existingUser) {
            res.status(400).send('Cet utilisateur existe déjà.');
        } else {
            const result = await collection.insertOne({
                username: userData.username,
                email: userData.email,
                password: hashedPassword,
                role: 'user'
            });
            res.redirect('/home');
        }

        client.close();
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur de serveur');
    }
});

router.get("/login", function (req, res) {
    res.render('login');
});

app.post('/login', async function (req, res) {
    try {
        const loginData = req.body;

        const client = new MongoClient(mongoURL);
        await client.connect();
        const db = client.db('users');
        const collection = db.collection('users.user');

        const user = await collection.findOne({ username: loginData.username });

        if (!user) {
            res.status(401).send('Nom d\'utilisateur incorrect');
        } else {
            const isPasswordValid = await bcrypt.compare(loginData.password, user.password);

            if (!isPasswordValid) {
                res.status(401).send('Mot de passe incorrect');
            } else {
                // Stockage des informations de l'utilisateur dans la session
                req.session.user = user;
                // Vérifier si l'utilisateur est un administrateur
                if (user.role === 'admin') {
                    req.session.message = 'Congrats ! You have found Flag 1 !';
                }
                // Redirection vers la page home
                res.redirect('/home');
            }
        }

        client.close();
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur de serveur');
    }
});

router.get("/articles", async function (req, res) {
    const client = new MongoClient(mongoURL);
    try {
        await client.connect();
        const db = client.db('ctf');
        const collection = db.collection('articles');

        let query = {};
        let searchQuery = req.query.search || ""; // Capturez la chaîne de recherche

        if (searchQuery) {
            // Si vous voulez toujours faire une recherche fonctionnelle sans échapper à la chaîne de recherche
            query = { title: { $regex: new RegExp(searchQuery, 'i') } };
        }

        const articles = await collection.find(query).toArray();

        // Passez la chaîne de recherche à la vue sans la nettoyer pour permettre l'injection XSS
        res.render('articles', { articles: articles, searchQuery: searchQuery });
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur de serveur');
    } finally {
        client.close();
    }
});

router.get("/article/:id", async function (req, res) {
    const articleId = req.params.id;

    const client = new MongoClient(mongoURL);
    await client.connect();
    const db = client.db('ctf');
    const collection = db.collection('articles');

    const article = await collection.findOne({ id: articleId });

    client.close();

    if (article) {
        res.render('articleDetail', { article: article });
    } else {
        res.send('Article non trouvé');
    }
});

const ObjectId = require('mongodb').ObjectId;

app.put('/article/:id', async function(req, res) {
    const articleId = req.params.id; // Utilisez directement l'ID sans le convertir
    const updatedData = req.body;

    // Connectez-vous à MongoDB
    const client = new MongoClient(mongoURL);
    try {
        await client.connect();
        const db = client.db('ctf');
        const collection = db.collection('articles');

        // Mettre à jour l'article sans filtrer le contenu pour XSS
        const result = await collection.updateOne(
            { id: articleId }, // Assurez-vous que cela correspond à la clé utilisée dans votre schéma de données
            { $set: updatedData }
        );

        if (result.matchedCount === 0) {
            res.status(404).send('Article non trouvé avec cet ID.');
        } else {
            res.send('Article mis à jour avec succès.');
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur interne du serveur');
    } finally {
        client.close();
    }
});

router.get('/ctf3', function(req, res) {
    res.render('ctf3');
});

app.use('/', router);

var port = process.env.PORT || 9000;

app.listen(port, function () {
    console.log("Le serveur a démarré! Port : ", port);
});
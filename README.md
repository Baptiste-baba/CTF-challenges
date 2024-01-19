# CTF-challenges
CTF Challenges for the Software Cybersecurity project

# Installation de Node.js

Ce guide vous aidera à installer Node.js sur votre système. Les étapes varient selon le système d'exploitation que vous utilisez.

## Windows et macOS

### Étapes :

1. **Télécharger l'installateur** :
   - Allez sur le site officiel de Node.js : [https://nodejs.org/](https://nodejs.org/).
   - Choisissez entre la version LTS (Long Term Support) ou Current.
   - Téléchargez l'installateur pour Windows ou macOS.

2. **Exécuter l'installateur** :
   - Ouvrez le fichier d'installation téléchargé.
   - Suivez les instructions à l'écran. Les paramètres par défaut conviennent à la plupart des utilisateurs.

3. **Vérifier l'installation** :
   - Ouvrez un terminal (Invite de commande sur Windows, Terminal sur macOS).
   - Tapez `node -v` pour vérifier la version de Node.js.
   - Tapez `npm -v` pour vérifier que npm (Node Package Manager) est installé.

## Linux (Debian et distributions basées sur Ubuntu)

### Étapes :

1. **Ajouter le PPA de Node.js à votre système** :
   - Ouvrez un terminal.
   - Exécutez les commandes suivantes pour ajouter le PPA :
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
     ```
     - Remplacez `setup_16.x` par `setup_14.x` si vous préférez installer la version 14.x LTS.

2. **Installer Node.js** :
   - Après avoir ajouté le PPA, installez Node.js en exécutant :
     ```bash
     sudo apt-get install -y nodejs
     ```

3. **Vérifier l'installation** :
   - Vérifiez l'installation en exécutant :
     ```bash
     node -v
     npm -v
     ```

## Problèmes et solutions

- Si vous rencontrez des problèmes, vérifiez que votre chemin d'accès système est correctement configuré et que les variables d'environnement sont correctement définies.
- Pour des problèmes spécifiques, consultez la documentation officielle de Node.js ou cherchez des solutions sur des forums tels que Stack Overflow.

---

Ce fichier README.md vise à fournir des instructions claires et précises pour l'installation de Node.js. Si vous avez des suggestions ou des corrections à apporter, n'hésitez pas à soumettre une pull request ou à ouvrir une issue.

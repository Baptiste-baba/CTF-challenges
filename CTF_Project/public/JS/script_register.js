document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.querySelector('input[name="password"]');
    const passwordStrengthElement = document.getElementById('password-strength');
    
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const passwordStrength = calculatePasswordStrength(password);
        const passwordStrengthText = getPasswordStrengthText(passwordStrength);
        
        passwordStrengthElement.textContent = passwordStrengthText;
    });
    
    function calculatePasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 12) {
            strength += 30;
        }
        
        if (/[A-Z]/.test(password)) {
            strength += 20;
        }
        
        if (/[a-z]/.test(password)) {
            strength += 20;
        }
        
        if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-\/|=]/.test(password)) {
            strength += 30;
        }
        
        return strength;
    }
    
    function getPasswordStrengthText(strength) {
        if (strength >= 80) {
            return 'Mot de passe fort';
        } else if (strength >= 50) {
            return 'Mot de passe moyen';
        } else {
            return 'Mot de passe faible';
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.querySelector('input[name="email"]');
  const emailErrorElement = document.getElementById('email-error');

  emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    if (!validateEmail(email)) {
      emailErrorElement.textContent = 'Format d\'e-mail invalide';
    } else {
      emailErrorElement.textContent = '';
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.querySelector('input[name="password"]');
  const passwordConfirmInput = document.querySelector('input[name="passwordConfirm"]');
  const passwordConfirmErrorElement = document.getElementById('password-confirm-error');

  passwordInput.addEventListener('input', checkPasswordMatch);
  passwordConfirmInput.addEventListener('input', checkPasswordMatch);

  function checkPasswordMatch() {
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    if (password !== passwordConfirm) {
      passwordConfirmErrorElement.textContent = 'Les mots de passe ne correspondent pas';
    } else {
      passwordConfirmErrorElement.textContent = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.querySelector('input[name="username"]');
    const usernameErrorElement = document.getElementById('username-error');

    usernameInput.addEventListener('input', () => {
        const username = usernameInput.value;
        const sanitizedUsername = sanitizeInput(username);
        if (username !== sanitizedUsername) {

            usernameInput.value = sanitizedUsername;
        }
    });
    
});

function sanitizeInput(input) {

    return input.replace(/[^\w\s]/gi, '');
}
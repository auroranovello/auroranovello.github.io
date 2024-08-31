// Language switcher function
function switchLanguage(language) {
    const contentEn = document.getElementById('content-en');
    const contentEs = document.getElementById('content-es');

    if (language === 'en') {
        contentEn.style.display = 'block';
        contentEs.style.display = 'none';
    } else if (language === 'es') {
        contentEn.style.display = 'none';
        contentEs.style.display = 'block';
    }
}

// Set the default language based on browser settings or user preference
document.addEventListener("DOMContentLoaded", function() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('es')) {
        switchLanguage('es');
    } else {
        switchLanguage('en');
    }
});

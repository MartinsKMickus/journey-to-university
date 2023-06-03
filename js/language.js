// Function to change the language
function changeLanguage(lang) {

    for (const translationId in translations[lang]) {
        // console.log(translationId)
        document.getElementById(translationId).innerHTML = translations[lang][translationId];
        // const translation = translations[currentLanguage][translationId];
    }

    // Active state of buttons
    const langBtns = document.getElementsByClassName('lang-btn');
    for (let i = 0; i < langBtns.length; i++) {
        langBtns[i].classList.remove('active');
    }
    document.getElementById(`lang-btn-${lang}`).classList.add('active');
    document.documentElement.setAttribute("lang", lang);

    // Save the selected language to local storage
    localStorage.setItem('selectedLanguage', lang);
}

// Check if a selected language is already stored
const storedLanguage = localStorage.getItem('selectedLanguage');
try {
    changeLanguage(storedLanguage);
}
catch (err) {
    changeLanguage('lv');
}

// Event listeners for language buttons
document.getElementById('lang-btn-en').addEventListener('click', function (event) {
    // Don't scroll to top
    event.preventDefault();

    changeLanguage('en');
});

document.getElementById('lang-btn-lv').addEventListener('click', function (event) {
    // Don't scroll to top
    event.preventDefault();

    changeLanguage('lv');
});
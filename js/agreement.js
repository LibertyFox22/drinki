const select = document.querySelector('.select');
const allLang = ['ru', 'en', 'tr'];




select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    changeLanguage()
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();      
    }
    select.value = hash;

    document.querySelector('.third').innerHTML = langArr['third'][hash];

}



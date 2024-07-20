    let popup = document.querySelector('.popup');
    let agree = document.querySelector('.popup__close');
    const select = document.querySelector('.select');
    const allLang = ['ru', 'en', 'tr'];
    window.onload = function() {
        popup.classList.add('open');
        }

    agree.onclick = function() {
        popup.classList.remove('open');
    }
    
    let button = document.querySelector('.but');
    button.onclick = function() { window.location = 'https://docs.google.com/forms/d/e/1FAIpQLSf96GBytI0KrXPL1ZSHvjvhk3jIuUK5Hrdot2VktkG3t88M2Q/viewform'; };

 
    
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
        document.querySelector('.first').innerHTML = langArr['fist'][hash];
        document.querySelector('.second').innerHTML = langArr['second'][hash];
        button.innerHTML = langArr['button'][hash];
        

    }


   
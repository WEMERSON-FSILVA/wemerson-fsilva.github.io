const btnMenu = document.querySelector('.btn_Menu');
    function openMenu() {
        if(document.querySelector('.navbar').style.display === 'block'){
                document.querySelector('.navbar').style.display = 'none';
                document.querySelector('.img-menu').setAttribute('src', './assets/img/menu.svg');
        }else {
                document.querySelector('.navbar').style.display = 'block';
                document.querySelector('.img-menu').setAttribute('src', './assets/img/close-menu.svg');
        }
        }
    btnMenu.addEventListener('click', openMenu);
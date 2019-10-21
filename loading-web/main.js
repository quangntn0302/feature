const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.opacity = 1;
        main.style.visibility = 'visible';
        main.style.width = '90%';
    }, 4000);
}

init();
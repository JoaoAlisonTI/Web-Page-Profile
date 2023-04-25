const menuSize = '330px';
let openn = true;

document.querySelector('.menu').style.marginLeft = `-${menuSize}`;

document.querySelector('.btn-menu').addEventListener('click', e => {
    openn = true;
    document.querySelector('.my-header').classList.add('background-nulo');
    document.querySelector('.section-about').classList.add('background-nulo');
    document.querySelector('.section-projects').classList.add('background-nulo');
    document.querySelector('.my-footer').classList.add('background-nulo');
    document.querySelector('.my-body').style.backgroundColor = '#282a30';
    toggleMenu();
})

document.querySelector('.btn-close').addEventListener('click', e => {
    openn = false;
    document.querySelector('.my-header').classList.remove('background-nulo');
    document.querySelector('.section-about').classList.remove('background-nulo');
    document.querySelector('.section-projects').classList.remove('background-nulo');
    document.querySelector('.my-footer').classList.remove('background-nulo');
    document.querySelector('.my-body').style.backgroundColor = '#282a36';
    toggleMenu();
})

function toggleMenu() {
    if (openn) {
        document.querySelector('.menu').style.marginLeft = '0';
    } else {
      document.querySelector('.menu').style.marginLeft = `-${menuSize}`;
    }
}
const menuSize = '330px';
let openn = true;

document.querySelector('.menu').style.marginLeft = `-${menuSize}`;

document.querySelector('.btn-menu').addEventListener('click', e => {
    openn = true;
    document.querySelector('.my-header').classList.add('background-nulo');
    document.querySelector('.section-profile').classList.add('background-nulo');
    document.querySelector('.section-experience').classList.add('background-nulo');
    document.querySelector('.section-education').classList.add('background-nulo');
    document.querySelector('.section-certifications').classList.add('background-nulo');
    document.querySelector('.section-skills').classList.add('background-nulo');
    document.querySelector('.my-footer').classList.add('background-nulo');
    document.querySelector('.my-body').style.backgroundColor = '#282a30';
    toggleMenu();
})

document.querySelector('.btn-close').addEventListener('click', e => {
    openn = false;
    document.querySelector('.my-header').classList.remove('background-nulo');
    document.querySelector('.section-profile').classList.remove('background-nulo');
    document.querySelector('.section-experience').classList.remove('background-nulo');
    document.querySelector('.section-education').classList.remove('background-nulo');
    document.querySelector('.section-certifications').classList.remove('background-nulo');
    document.querySelector('.section-skills').classList.remove('background-nulo');
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
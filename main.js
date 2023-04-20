const menuSize = '330px';
let openn = true;

document.querySelector('.menu').style.marginLeft = `-${menuSize}`;

document.querySelector('.btn-menu').addEventListener('click', e => {
    openn = true;
    toggleMenu();
})

document.querySelector('.btn-close').addEventListener('click', e => {
    openn = false;
    toggleMenu();
})

function toggleMenu() {
    if (openn) {
        document.querySelector('.menu').style.marginLeft = '0';
    } else {
      document.querySelector('.menu').style.marginLeft = `-${menuSize}`;
    }
}
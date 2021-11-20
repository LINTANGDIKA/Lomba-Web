let active = document.getElementById('active');
let list = document.getElementsByClassName('list')[0];
let isi = list.querySelectorAll('li a');
isi.forEach(element => {
    if (element.className == 'active') {
        element.classList.remove('active');
        element.classList.remove('color2');
    }
    element.addEventListener('click', () => {
        element.classList.add('active');
        element.classList.add('color2');
        element.classList.remove('color');
    });



});
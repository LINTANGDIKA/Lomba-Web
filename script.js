let item = document.querySelector('.burger');
let item1 = document.querySelectorAll('.burger span');
let isi = document.getElementsByClassName('list')[0];
console.log(item1)
item.addEventListener('click', function () {
    isi.classList.toggle('slide');
});
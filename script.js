let item = document.querySelector('.burger');
let item1 = document.querySelectorAll('.burger span');
let isi = document.getElementsByClassName('list')[0];
console.log(item1)
item.addEventListener('click', function () {
    isi.classList.toggle('slide');
    burger1[0].classList.toggle('putar1');
    burger1[1].classList.toggle('putar2');
    burger1[2].classList.toggle('putar3');
});
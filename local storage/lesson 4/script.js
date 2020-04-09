//Задание 4
let textpole1 = document.querySelector('#text1');
let textpole2 = document.querySelector('#text2');
let button1 = document.querySelector('#save');
let button2 = document.querySelector('#show');
let valueArray = [];

button1.addEventListener('click', function (argument) {
valueArray.push(textpole1.value);
localStorage.setItem('text', valueArray);
textpole1.value = '';
});

button2.addEventListener('click', function () {
let perem = localStorage.getItem('text');
textpole2.value = perem;
});

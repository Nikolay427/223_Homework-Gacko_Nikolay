/*Задание 18 Номер 2*/
document.write("<br> №18(2) ");
let str2 = 'http://nke.ru';
document.write(/^http(:|s:)\/\//.test(str2));

/*Задание 18 Номер 4*/
document.write("<br> №4 ");
let str4 = 'ffff.jpeg';
document.write(/\.jpe?g$/.test(str4));

/*Задание 18 Номер 6*/
document.write("<br> №6 ");
let str6 = '5555d';
document.write(/\d{1,12}$/.test(str6));

/*Задание 18 Номер 8*/
document.write("<br> №8 ");
let str8 = '23.07.2000';
document.write(/(\d{2}\.){2}\d{4}/.test(str8));

/*Задание 18 Номер 10*/
document.write("<br> №10 ");
let str10 = 'niikolay.gacko@mail.ru';
document.write(/^[\w.\-\_]+?@[a-z]+?\.[a-z]+/.test(str10));
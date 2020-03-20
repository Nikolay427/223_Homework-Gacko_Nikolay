/*Задание 21 Номер 1*/
let str = '12 34 56 78';
let res = str.replace(/\b(\d)(\d)\b/g, '$2$1');
document.write(res);

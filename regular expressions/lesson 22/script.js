/*Задание 22 Номер 2*/
document.write("№22(2) <br>");
let str = 'sss site.ru zzz site.com kkk';
let res = str.replace(/[a-z]+?\.[a-z]+?\s/g, "<a href='http://site.ru'>site.ru</a>");
document.write(res);
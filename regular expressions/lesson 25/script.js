/*Задание 25 Номер 2*/
document.write("№25(2) <br>");
let str = '<a href="" class="eee" id="zzz">';
let res = str.match(/\w+?(?==)/g);
document.write(res);
/*Задание 20 Номер 2*/
let str = '14.01.45';
let res = str.match(/(\d{2})\.(\d{2})\.(\d{2})/);
let arr = ['Найденное: ', 'День: ', 'Месяц: ', 'Год: '];
for (let i = 0; i < res.length; i++) {
	document.write(arr[i] + res[i] + "<br>");
}

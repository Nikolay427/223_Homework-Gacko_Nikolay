/*Задание 25 Номер 2*/
document.write("№26(1) <br>");
let str = 'aaa [2] bbb [3] ccc [12] ddd';
let res = str.replace (/\[(\d+)\]/g, function(match, value){
	return "[" + (value * 2) + "]";
});
document.write(res);

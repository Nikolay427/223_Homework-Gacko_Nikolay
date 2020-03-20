/*Задание 19 Номер 2*/
let str = "x745435z xzz43344355 ddd2ddd 33h33";
let res = str.match(/\d/g);
let sum = 0;
for (dgt of res){
	sum += Number(dgt);
}
document.write("Сумма = "+sum);

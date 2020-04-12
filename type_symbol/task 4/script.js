//Задание 4
let arr4 = [7, 4, 3, 4];
let func4 = Symbol();
arr4[func4] = function () {
		let summ4 = 0;
		for (let key of this) {
	    summ4 = summ4 + key; 
}
document.write('Сумма елементов: ' + summ4 );
}
arr4[func4]();
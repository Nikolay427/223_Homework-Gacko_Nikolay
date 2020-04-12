//Задание 5
let arr5 = [7, 9, 6, 4];
let func5 = Symbol.for('func5');
arr5[func5] = function () {
		let summ5 = 0;
		for (let key of this) {
	    summ5 = summ5 + key; 
}
document.write('Сумма елементов: ' + summ5 );
}
arr5[func5]();
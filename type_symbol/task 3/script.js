//Задание 3
var obj3 = {'elemA': 1, 'elemB': 2, 'elemC': 3, 'elemD': 4}
var sym3 = Symbol();

obj3[sym3] = function() {
		let summ3 = 0;
		for (let key in this) {
	    summ3 = summ3 + this[key]; 
}
document.write('Сумма элементов: '+summ3);
}
obj3[sym3]();

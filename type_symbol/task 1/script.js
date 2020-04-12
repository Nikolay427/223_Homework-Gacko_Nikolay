//Задание 1
var obj1 = {a: 1, b: 2, c: 3, d: 4};
var sym1 = Symbol ();
obj1[sym1] = 'text';

for (let key in obj1){
	document.write(obj1[key] + " ");
}
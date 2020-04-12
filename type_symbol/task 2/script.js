//Задание 2
var obj2 = {a: 1, b: 2, c: 3, d: 4};
var sym2 = Symbol ();
obj2[sym2] = function() {alert('!');}

for (let key in obj2){
	document.write(obj2 [key] + " ");
}
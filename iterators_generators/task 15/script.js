//Задание 15
var maps15 = new Map();
maps15.set('keys1', 21);
maps15.set('keys2', 33);
maps15.set('keys3', 59);

var iterator15 = maps15.entries();

for(let elem of maps15)
{
	console.log(elem);
}
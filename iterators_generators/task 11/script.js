var obj11 = {a:1, b:2, c:3, d:'text', e:'Toje Text'};
function *createIterator(obj11)
{
for(let key11 in obj11)
{
	yield obj11[key11];
}
}
var iterator11 = createIterator(obj11);
for(let elem11 of iterator11)
{
	console.log(elem11);
}
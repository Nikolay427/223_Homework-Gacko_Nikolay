var arr8 = [1, 9, 2, 8, 3, 7, 4, 6];
function *createIterator(arr8)
{
	for (let i = 0; i < arr8.length; i+=2)
	{
		yield [arr8[i], arr8[i+1]];
	}
}
var iterator8 = createIterator(arr8);

for (let elem8 of iterator8)
{
	console.log(elem8);
}
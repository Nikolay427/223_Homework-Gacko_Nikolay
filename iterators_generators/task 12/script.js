var obj12 = {a:1, b:2, c:3, d:'text', e:'Toje Text',
*[Symbol.iterator]()
{
for(let key12 in this){
	yield this[key12];
}
}
};
for(let elem12 of obj12)
{
	console.log(elem12);
}
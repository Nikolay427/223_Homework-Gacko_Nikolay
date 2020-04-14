//Задания 20
const setIterator = obj => {
obj[Symbol.iterator] = function *() {
for (let key in obj) {
yield obj[key]
}
}
return obj;
}

const iterateObj = setIterator({
'a': 1,
'b': '1 + 1',
'c': function() {
return this.a + this.b
}
})

console.log([...iterateObj]);
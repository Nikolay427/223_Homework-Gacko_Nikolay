// Задание 17
var body = document.querySelector('body');
var ul = document.createElement('ul');
let str17 = '12345';
for (let symbol of str17)
{
	var li = document.createElement('li');
	li.innerHTML = symbol;
	ul.appendChild(li);
}
body.appendChild(ul);
// Задание 5
var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('fggnnvbnfnn(это абракадабра для проверки)'));
console.log(validator.isPhone('+7(962)839-09-30')); 
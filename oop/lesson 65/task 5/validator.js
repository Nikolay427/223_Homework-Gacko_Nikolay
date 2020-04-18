// Класс Validator (Задание 5)
class Validator {
	isEmail(str){
		return /^[\w.\-\_]+?@[a-z]+?\.[a-z]+/.test(str);
	}
	isDomain(str){
		return /[a-zA-Z]+?\.[a-zA-Z]+/.test(str);
	}
	isDate(str){
		return /(\d{2}\.){2}\d{4}/.test(str);
	}
	isPhone(str){
		return /(8|\+7)(\({1}\d{3}\){1}|\d{3})\d{3}(\-?\d{2}){2}/.test(str);
	}
}

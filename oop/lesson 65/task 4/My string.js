// Класс MyString (Задание 4)
class MyString {
	reverse([...str]){
		return str.reverse().join('');
	}	
	ucFirst(str){
		return str[0].toUpperCase() + str.slice(1); 
	}
	ucWords(str){
		str = str.split(' ');
		str.forEach((elem, i, array) => array[i] = this.ucFirst(elem));
		return str.join(' ');
	}
}

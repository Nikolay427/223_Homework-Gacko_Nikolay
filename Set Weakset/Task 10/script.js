let per = [5, 3, 4, 4, 6, 70, 4, 5, 70, 6, 3, 3, 2, 7, 2, 7, 'a', 'a', 'a',];
console.log("Массив " + per)
per = [...new Set(per)];
console.log("Без дублей " + per);

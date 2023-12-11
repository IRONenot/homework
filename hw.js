// вывод в консоль
console.log('Hello from JS')

// Переменные
let userName = 'Sasha' // Строка (Текст) (Одно слово, фраза, предложение, абзац, хоть целая книга)
console.log(userName)

// Типы переменных

/* Новый стандарт ES6:
let - переменная
const - константа

Старый стандарт ES5:
var - переменная
*/

/* let - может менять значение во время работы программы */
userName = 'Егор';
console.log(userName)

/* const - не может менять значение */
const yearOfBirth = 1998; // Число
// yearOfBirth = 1995    Ошибка;
console.log(yearOfBirth)

/*
По умолчанию используем const,
когда явно понятно что переменная будет менять свое значение, тогда let
*/

let isMarried = false; // Логическое значение true/false

/*
Значение null
«ничего», «пусто» или «значение неизвестно».
*/
let age = 42;
age = null;
console.log(age);

// Оператор typeof
let someName = 'James';
console.log(typeof someName);
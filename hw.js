//=========================================== вывод в консоль

console.log('Hello from JS')

//============================================ Переменные

let userName = 'Sasha' // Строка (Текст) (Одно слово, фраза, предложение, абзац, хоть целая книга)
console.log(userName)


 //=========================================== Типы переменных

/* Новый стандарт ES6:
let - переменная
const - константа

Старый стандарт ES5:
var - переменная
*/

/* let - может менять значение во время работы программы */
userName = "Егор";
console.log(userName);

/* const - не может менять значение */
const yearOfBirth = 1998; // Число
// yearOfBirth = 1995    Ошибка;
console.log(yearOfBirth);

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
userName = "James";
console.log(typeof someName);

// =================== 3. Операторы сравнения и условия =================== //

/*
Операторы сравнения
>, <, >=, <= - больше, меньше, больше либо равно, меньше либо равно
== - нестрогое сравнение
=== - строгое сравнение
!= - нестрогое неравенство
!== строгое неравенство
*/

console.log(10 > 5); // true
console.log(20 > 80); // false

console.log("5" == 5); // true
console.log("5" === 5); // false
// =========== условие ============= //

/*
if (условие){
    // Код который будет выполнен если условие верно
} else {
    // Код который будет выполнен если условие НЕ верно
}
*/
let time = 12;
if (time < 12) {
  console.log("Доброе утро");
} else if (time >= 12 && time < 18) {
  console.log("Добрый день");
} else {
  console.log("Добрый вечер");
}

/*
Логические операторы
&& - логическое И
|| - логическое ИЛИ
!true - логическое НЕ
*/
// ======== 4. Тернарный оператор ========= //
// (условие) ? (условие верно) : (условие не верно);

if (10 < 12) {
  console.log("Условие верно");
} else {
  console.log("Условие НЕ верно");
}

10 < 12 ? console.log("Условие верно") : console.log("Условие НЕ верно"); //Тернарный оператор

let greeting;
time = 10;

if (time < 12) {
  greeting = "Доброе утро";
} else {
  greeting = "Добрый день";
}
console.log(greeting);

greeting = time < 12 ? "Доброе утро" : "Добрый день";
console.log(greeting); //Тернарный оператор

// ======== 4. Конкатенация строк и шаблонные строки =========

console.log("Привет, Марк! ");

greeting = "Привет, Марк!";
let howAreYou = "Как твои дела?";
let sayHi = greeting + howAreYou;

userName = "Марк";
console.log("Привет, " + userName + "! Как твои дела?");

// шаблонные строки
console.log(`Привет, ${userName_1}! Как твои дела?`);

// ============================= 5. Функции ============================

console.log("Привет, дорогой пользователь");

function sayHi() {
  console.log("Привет, дорогой пользователь!");
}

sayHi();

// =================== 5.1 Параметры и аргументы для функции ===================

function sayHi(name) {
  console.log(`Привет, ${name}. Как дела?`);
}

sayHi("Dan");

// =================== return внутри функции ===================

function summ(a, b) {
  const reesult = a + b;
  console.log(result);
}
summ(2, 3);

function summ(a, b) {
  const result = a + b;
  return result;
}
const res = summ(10, 15);
console.log(res);

// =================== 5.3 Функция как аргумент ===================

function summ(a, b) {
    return a + b
}

const result = summ(summ(15, 15), summ(20, 20))
console.log(result)

// =================== 5.3 Функция как аргумент - 2 ===================

function summ (a, b){
	return a + b;
}

function diff (a, b){
	return a - b;
}

function doSomething(func){
	let result = func(10, 15);
	console.log(result);
}

doSomething(summ); // 25
doSomething(diff); // -5

// =================== 5.3 Самовызывающаяся функция ===================

(function sayHi() {
  console.log('Привет, дорогой пользователь!');
})()

// =================== 5.3 Стрелочные функции ===================

const arrSayHi = (name) => {
  console.log(`Привет, ${name}! Как твои дела?`);
}
arrSayHi('Sasha')

// const summ = (a, b) => {
// 	const result = a + b;
// 	return result;
// };

// const summ = (a, b) => {
// 	return a + b;
// };

const summ = (a, b) => a + b;

res = summ(10,15)
console.log(res)

// =================== 6. Массивы ===================

const autoBrand1 = "Audi";
const autoBrand2 = "BMW";
const autoBrand3 = "Mazda";
const autoBrand4 = "Toyota";

const autoBrands = ["Audi", "BMW", "Mazda", "Toyota"];
//console.log(autoBrands);
console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);

console.log(autoBrands.length); // длинна массива, кол-во элементов

// =================== 7. Методы массивов ===================

// .push(), .pop(), shift(), unshift(), .splice(), .slice(), .forEach(), .indexOf(), .includes()  ...

/*
arr.push(...items) – Добавить элемент в конец массива
arr.pop() – Удалить элемент из конца массива
arr.shift() – Удалить элемент из начала массива
arr.unshift(...items) – Добавить элемент в начало массива
arr.splice([start]], [deleteCount, newElements])
*/

autoBrands.push('Nissan');
console.log(autoBrands);

autoBrands.splice(2, 1);
console.log(autoBrands);

// Методы массивов - это тема для отдельного урока

// =================== 7. Циклы ===================

 for (let i = 0; i < 10; i++) {
  console.log(i);
}

// =================== 7. Обход массива циклом for ===================

console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);

for (let i = 0; i < autoBrands.length; i++) {
	autoBrands[i];
}

//=================== 7. Обход массива циклом for ( of ) ===================

for (let item of autoBrands) {
	console.log(item);
}

// =================== 8. Обход массива методом forEach() ===================

autoBrands.forEach(function (item) {
	console.log(item);
});
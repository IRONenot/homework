//=========================================== 1. вывод в консоль

console.log('Hello from JS')

//============================================ 2. Переменные

let userName = 'Sasha' // Строка (Текст) (Одно слово, фраза, предложение, абзац, хоть целая книга)
console.log(userName)

//Типы переменных

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

// ==================== 4. Конкатенация строк и шаблонные строки =================

console.log("Привет, Марк! ");

greeting = "Привет, Марк!";
let howAreYou = "Как твои дела?";
let sayHi = greeting + howAreYou;

userName = "Марк";
console.log("Привет, " + userName + "! Как твои дела?");

// шаблонные строки
console.log(`Привет, ${userName_1}! Как твои дела?`);

// ====================================== 5. Функции ====================================

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

// =================== 5.2 return внутри функции ===================

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

// =================== 5.4 Функция как аргумент - 2 ===================

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

// =================== 5.6 Самовызывающаяся функция ===================

(function sayHi() {
  console.log('Привет, дорогой пользователь!');
})()

// =================== 5.7 Стрелочные функции ===================

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

// =================== 8. Циклы ===================

 for (let i = 0; i < 10; i++) {
  console.log(i);
}

// =================== 9. Обход массива циклом for ===================

console.log(autoBrands[0]);
console.log(autoBrands[1]);
console.log(autoBrands[2]);

for (let i = 0; i < autoBrands.length; i++) {
	autoBrands[i];
}

//=================== 9.1 Обход массива циклом for ( of ) ===================

for (let item of autoBrands) {
	console.log(item);
}

// =================== 9.2 Обход массива методом forEach() ===================

autoBrands.forEach(function (item) {
	console.log(item);
});

// ================================ 10. Объекты ===============================

let userName = 'Марк';
let age = 30;
let isMarried = false;

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
};

console.log(person);
console.log(person.name);

person.speciality = 'JS developer';
console.log(person);
console.log(person.speciality);

delete person.age;
console.log(person);

// ================================ 10.1 Методы в объектах ===============================
// Метод - это функция которая является свойством объекта. Функция принадллежащая объекту.

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log('Привет!');
	},
};

person.sayHi();

// Параметры в методе, также как и в функции

person.sayHi = function (yourName) {
	console.log(`Привет, ${yourName}!`);
};

person.sayHi();

// Ключевое слово this

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};

person.sayHi();


// ================= 10.2 Объекты обход циклом for in (не путать с for of) ================
// В отличие от for ... of  - for .. in может обходить неитерируемые объекты и возвращает ключи.

for (let key in person) {
	console.log(key, ':', person[key]);
}


// ================================ 10.3 Нюанс сonst и изменением объекта и массива ===============================

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
};

// Ошибка! Переопределение ссылки на новый объект
person = {
	userName: 'Ник',
};

// Аналогично и для массивов

// ================================ 11. Классы. Конструкторы объектов ===============================

// Представим ситуацию когда нам надо описать несколько одинаковых объектов

const person1 = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};

const person2 = {
	userName: 'Павел',
	age: 28,
	isMarried: true,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};

// Выглядит довольно громоздко, не так ли.
// Плюс заметно что мы используем "одну и ту же структуру" для каждого объекта.
// Если бы это можно было упростить.
// И такой способ есть, использовать классы

// Опишем класс, это как чертеж для всех будущих объектов person которые будут создаваться на его основе

class Person {
	constructor(userName, age, isMarried) {
		this.userName = userName;
		this.age = age;
		this.isMarried = isMarried;
	}

	sayHi(yourName) {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	}
}

// Теперь создадим новые объекты на основе класса person

const person1 = new Person('Марк', 30, false);
const person2 = new Person('Павел', 28, true);

// Они были созданы с указанными свойствами, плюс оба имеют методы которые были описаны в конструкторе

person1.sayHi('Юрий');
person2.sayHi('Елена');


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser = 'Opera';
// (browser === 'Edge') ? alert("You've got the Edge!") :
// 	(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') ? alert(`Okay we support ${browser} too`) :
// 		alert('We hope that this page looks ok!');


// !
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
// 	case 0:
// 		alert('Вы ввели число 0');
// 		break;
// 	case 1:
// 		alert('Вы ввели число 1');
// 		break;
// 	case 2:
// 	case 3:
// 		alert('Вы ввели число 2, а может и 3');
// 		break;
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//  return (age > 18) ? true : confirm('Родители разрешили?');
// 	return age > 18 || confirm('Родители разрешили?');
// }

// function min(a, b) {
// 	return (a > b) ? console.log(b) : console.log(a);
// };
// min(2, 5);
// min(3, -1);
// min(1, 1);


// ! функція приведення числа в степінь через рекурсію


// function pow(x = +prompt('x?', ''), n = +prompt('n?', '')) {
// 	return (n == 1) ? x :
// 		(n < 1) ? 'Не коректний степінь' : n * pow(x, n - 1);
// }
// console.log(pow());


// !

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();
// ask(
// 	"Вы согласны?",
// 	() => alert("Вы согласились."),
// 	() => alert("Вы отменили выполнение."));

// !

// let o = {
// 	'1.2': 'one point two',
// 	'5': 'five',
// 	'2': 'two',
// 	'1': 'one'
// }

// let r = {
// 	'7': 'seven',
// 	'8': 'eight',
// 	'9': 'nine',
// 	'10': 'ten'
// }

// for (let k in o) {
// 	console.log(k, ':', o[k]);
// 	// p[k] = o[k];

// }
// let p = Object.assign({}, o, r);

// !
// let user = {};
// console.log(user);

// user.name = "John";
// console.log(user);

// user.surname = "Smith";
// console.log(user);

// user.name = "Peter";
// console.log(user);

// delete user.name;
// console.log(user);

// !

// let schedule = {};

// function isEmpty(obj) {
// 	let counter = 0;
// 	for (let k in obj) {
// 		counter++;
// 	}
// 	return counter <= 0;
// }

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// !

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// }
// let sum = 0;
// for (let k in salaries) {
// 	sum += salaries[k];
// }
// console.log(sum);

// !

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };
// function multiplyNumeric(obj) {
// 	for (let k in obj) {
// 		if (typeof obj[k] === "number") {
// 			obj[k] *= 2;
// 		}
// 	}
// }
// multiplyNumeric(menu);

// console.log(menu);


// ! Symbol

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu"
// };
// let clone = {};
// menu.weight = Symbol(300000);
// for (let k in menu) {
// 	clone[k] = menu[k];
// }
// console.log(clone)
// console.log(clone.width == menu.width);

// !

// let calculator = {

// 	sum() {
// 		return this.a + this.b;
// 	},
// 	mul() {
// 		return this.a * this.b;
// 	},
// 	read() {
// 		this.a = +prompt("number a?", "");
// 		this.b = +prompt("number b", "");
// 	}
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


// !

// let ladder = {
// 	step: 0,

// 	up() {
// 		this.step++;
// 		return this;
// 	},
// 	down() {
// 		this.step--;
// 		return this;
// 	},
// 	showStep: function () { // показывает текущую ступеньку
// 		console.log(this.step);
// 		return this;
// 	}
// };
// ladder.up().up().down().showStep();


// !
// let alfa = {
// 	name: "Roman"
// };
// function A() {
// 	return alfa;
// }
// function B() {
// 	return alfa;
// }

// let a = new A;
// let b = new B;

// console.log(a === b); // true

// ! Создание калькулятора при помощи конструктора
// function Calculator() {
// 	this.read = function () {
// 		this.a = +prompt("number a?", "");
// 		this.b = +prompt("number b", "");
// 	};
// 	this.sum = function () {
// 		return this.a + this.b;
// 	};

// 	this.mul = function () {
// 		return this.a * this.b;
// 	};
// }
// let calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

// !Создаём Accumulator

// function Accumulator(startingValue) {

// 	this.value = startingValue;
// 	this.read = function () {
// 		this.value += +prompt("Enter value to add", 0);
// 		return this;
// 	}
// }

// let accumulator = new Accumulator(10); // начальное значение 1

// accumulator.read().read(); // прибавит ввод prompt к текущему значению

// console.log(accumulator.value); // выведет сумму этих значений

// todo Типы данных

// !Методы у примитивов
// "use strict";
// let str = "Привет";

// str.test = 5;

// alert(str.test);

// ! Числа

// ?Сумма пользовательских чисел

// let firstNumber = +prompt("Преше число", "");
// let secundNumber = +prompt("Друге число", "");
// alert(firstNumber + secundNumber);


// ?Почему 6.35.toFixed(1) == 6.3?.

// let num = 6.35;
// let numLong = num.toFixed(25);
// console.log(numLong);
// console.log(Math.round(num * 10) / 10);

// ? Ввод числового значения

// function readNumber() {
// 	let mastBeNumber = prompt('Enter some number value', '0');
// 	(mastBeNumber === null || mastBeNumber === '') ? alert('been canseled') :
// 		(isNaN(mastBeNumber)) ? readNumber() :
// 			alert(`Your number ${mastBeNumber}`);
// };
// readNumber();

// ? Бесконечный цикл по ошибке

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }


// let i = 0;
// while (i <= 10) {
// 	console.log(i += 0.2);

// }


// ? Случайное число от min до max


// function random(a, b) {
// 	return a + Math.random() * (b - a);
// };

// alert(random(1, 5)); // 1.2345623452
// alert(random(1, 5)); // 3.7894332423
// alert(random(1, 5)); // 4.3435234525

// ? Случайное целое число от min до max

// function randomInteger(a, b) {
// 	return Math.round(a - 0.5 + Math.random() * (b - a + 1));
// };
// alert(randomInteger(5, 10)); // 1
// alert(randomInteger(5, 10)); // 1
// alert(randomInteger(5, 10)); // 1
// alert(randomInteger(5, 10)); // 1

// !  строки

// ? Сделать первый символ заглавным

// function ucFirst(str) {
// 	if (str.length === 0 || str == 0) return alert(`It's empty string here!!!`);
// 	return str = str.slice(0, 1).toUpperCase() + str.substring(1);
// };

// console.log(ucFirst(''));.

// ? Проверка на спам

// function checkSpam(str) {
// 	return str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx");
// };

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));


// ? Усечение строки

// function truncate(str, maxlength) {
// 	return (str.length > maxlength) ? str = str.slice(0, maxlength - 1) + '...' : str;
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));


//? Выделить число

// function extractCurrencyValue(str) {
// 	if (str.startsWith('$')) str = str.slice(1);
// 	return +str;
// }

// console.log(extractCurrencyValue('$120') === 120);
// console.log(extractCurrencyValue('120') === 120);
// console.log(extractCurrencyValue('$5') === 5);
// console.log(extractCurrencyValue('$15') === 15);


// ! Масивы

// ? Операции с массивами

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.floor(styles.length - 1) / 2] = 'Классика';
// let a = styles.shift(0);
// console.log(a);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// ?Вызов в контексте массива

// let arr = ["a", "b"];

// arr.push(function () {
// 	alert(this);
// })

// arr[2]();// a,b,function () {alert(this);}


// ?Сумма введённых чисел


// function sumInput() {
// 	let a = 0;
// 	let arr = [];
// 	while (!isNaN(a) && a !== null && a !== '' && a !== ' ' && a !== String) {
// 		a = prompt('Number', '0');
// 		if (!isNaN(a)) {
// 			arr.push(+a);
// 			console.log(arr);
// 		}
// 	};
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += +arr[i];
// 	}
// 	console.log(sum);
// };

// sumInput();

// ? Подмассив наибольшей суммы

// function getMaxSubSum(arr) {
// 	let maxSum = 0;
// 	let sum = 0;
// 	for (let value of arr) {
// 		sum += value;
// 		maxSum = Math.max(maxSum, sum);
// 		if (sum < 0) sum = 0;
// 	}
// 	return maxSum;
// }
// console.log(getMaxSubSum([-1, 2, 3, -9]));
// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
// console.log(getMaxSubSum([-2, -1, 1, 2]));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]));
// console.log(getMaxSubSum([1, 2, 3]));
// console.log(getMaxSubSum([-1, -2, -3]));
// console.log(getMaxSubSum([2, -1, 2, 3, -9]));


// ! Методы массивов

// ? Переведите текст вида border-left-width в borderLeftWidth

// function camelize(str) {

// todo first way!!!!!

// let arr = str.split('-')
// console.log(arr);
// for (let i = 1; i < arr.length; i++) {
// 	arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// };
// return arr.join('');

// todo second way
// 	return str.split('-')
// 		.map((item, index) => (index === 0) ? item : item[0].toUpperCase() + item.slice(1))
// 		.join('');
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// ? Фильтрация по диапазону

// function filterRange(array, a, b) {
// 	return array.filter(item => item >= a && item <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered);

// alert(arr); 

// ?Фильтрация по диапазону "на месте"

// function filterRangeInPlace(array, a, b) {
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] < a || array[i] > b) {
// 			array.splice(i, 1);
// 			i--;
// 		}
// 	}
// 	return array;
// }
// let arr = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let arr2 = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let arr3 = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let arr4 = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// filterRangeInPlace(arr, 1, 4);
// filterRangeInPlace(arr2, -5, 5);
// filterRangeInPlace(arr3, 0, 10);
// filterRangeInPlace(arr4, -10, 5);

// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// ?Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

// ?Скопировать и отсортировать массив

// function copySorted(arr) {
// 	return arr.slice().sort();
// }


// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(`sorted: ${sorted}`);
// console.log(`arr: ${arr}`); 

// ? Создать расширяемый калькулятор

// function Calculator() {
// 	this.method = {
// 		'+': (a, b) => a + b,
// 		'-': (a, b) => a - b,
// 	};
// 	this.calculate = function (str) {

// 		let splitedStr = str.split(' ');
// 		let a = +splitedStr[0];
// 		let operator = splitedStr[1];
// 		let b = +splitedStr[2];

// 		if (!this.method[operator] || isNaN(b) || isNaN(a)) {
// 			return NaN;
// 		}

// 		return this.method[operator](a, b);
// 	};
// 	this.addMethod = function (name, func) {
// 		this.method[name] = func;
// 	};
// }

// let calc = new Calculator;

// console.log(calc.calculate("3 + 7"));
// console.log(calc.calculate("7 - 2"));
// console.log(calc.calculate("-7 - 2"));
// console.log(calc.calculate("-7.5 - 2.3"));
// console.log(calc.calculate("0 - 2"));

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let resultMult = powerCalc.calculate("2 * 3");
// let resultDivid = powerCalc.calculate("27 / 3");
// let resultPow = powerCalc.calculate("2 ** 3");
// console.log(resultMult);
// console.log(resultDivid);
// console.log(resultPow);

// ? Трансформировать в массив имён

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => item.name);

// console.log(users);
// console.log(names);

// ? Трансформировать в объекты

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((value) => value = {
// 	fullName: `${value.name} ${value.surname}`,
// 	id: value.id
// });
// console.log(usersMapped);
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);


// ? Отсортировать пользователей по возрасту

// function sortByAge(arr) {
// 	return arr.sort((a, b) => a.age - b.age);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// ? Перемешайте массив

// function shuffle(a) {
// ! first way
// let j, x;
// for (let i = a.length - 1; i >= 0; i--) {
// 	j = Math.floor(Math.random() * (i + 1));
// 	x = a[i];
// 	a[i] = a[j];
// 	a[j] = x;
// }
// return a;

// ! secund way
// 	return a.sort(() => 0.5 - Math.random());
// }

// let arr = [1, 2, -3, 4, 5, 6, 7, -8, 9, -10];

// console.log(shuffle(arr));

// console.log(shuffle(arr));

// console.log(shuffle(arr));


// ? Получить средний возраст

// function getAverageAge(arr) {
// 	return arr.reduce((acum, item) => acum + item.age, 0) / arr.length;
// }


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// console.log(getAverageAge(arr));

// ? Оставить уникальные элементы массива

// function unique(arr) {
// 	let arrToReturn = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (!arrToReturn.includes(arr[i])) arrToReturn.push(arr[i]);
// 	}
// 	return arrToReturn;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
// 	"харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings));

// ! SET  &  MAP

// ?  Фильтрация уникальных элементов массива

// function unique(arr) {
// 	return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
// 	"Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values));

// ? Отфильтруйте анаграммы

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// function aclean(arr) {
// 	// arr = arr.reverse();
// 	let mapFromArr = new Map();
// 	for (let value of arr) {
// 		let keys = value.toLowerCase().split('').sort().join('');
// 		mapFromArr.set(keys, value);
// 	}
// 	return Array.from(mapFromArr.values());
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));

// ? Перебираемые ключи

// let map = new Map();

// map.set("name", "John");
// console.log(map);

// let keys = [...map.keys()];

// console.log(keys)

// for (let k of keys) {
// 	console.log(k)
// };
// for (let k in keys) {
// 	console.log(k);
// };
// console.log(keys[0]);


// ! Object.keys, values, entries

// ? Сумма свойств объекта

// function sumSalaries(obj) {
// 	let sum = 0;
// 	for (let val of Object.values(obj)) {
// 		sum += val;
// 	}
// 	return sum;
// }

// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
// };

// console.log(sumSalaries(salaries)); // 650

// ? Подсчёт количества свойств объекта
//
// function count(obj) {
// 	//let number = 0;
// 	//for (let k in Object.keys(obj)) {
// 		//number++;
// 	//}
// 	//return number;
// 	// or
// 	return Object.keys(obj).length;
// }
//
// let user = {
// 	name: 'John',
// 	age: 30
// };
//
// console.log(count(user));

// ! Деструктурирующее присваивание

// ? Деструктурирующее присваивание

// let user = {
// 	name: "John",
// 	years: 30
// };

// let { name, years: age, isAdmin = false } = user;
// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false


// ? Максимальная зарплата

// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Kim": 300,
// 	"Petia": 300,
// 	"Mary": 250,
// 	"Tom": 250,
// 	"Any": 250,
// 	"Sem": 250,
// };

// function topSalary(obj) {
// 	let maxValue = 0;
// 	let maxName = null;
// 	for (let [name, value] of Object.entries(obj)) {
// 		if (maxValue < value) {
// 			maxValue = value;
// 			maxName = name;
// 		}
// 	}
// 	return maxName;
// }
// console.log(topSalary(salaries));


//! Дата и время 


// ? Создайте дату

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
// let someDate = new Date(2012, 1, 20, 3, 12);
// alert(someDate);

// ? Покажите день недели

// let date = new Date(2020, 3, 26);  // 3 января 2012 года

// function getWeekDay(d) {

// switch (d.getDay()) {
// 	case 0:
// 		return 'Sunday';
// 	case 1:
// 		return 'Monday';
// 	case 2:
// 		return 'Tuesday';
// 	case 3:
// 		return 'Wednesday';
// 	case 4:
// 		return 'Thursday';
// 	case 5:
// 		return 'Friday';
// 	case 6:
// 		return 'Saturday';
// }
//  todo or 
// 	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 	return days[d.getDay()];
// }

// console.log(getWeekDay(date));

// ? День недели в европейской нумерации

// let date = new Date(2020, 3, 24);  // 3 января 2012 года

// function getLocalDay(d) {
// 	let numberOfDay = d.getDay();
// 	if (numberOfDay === 0) numberOfDay = 7;

// 	return numberOfDay;
// }

// console.log(getLocalDay(date));       // вторник, нужно показать 2

// ? Какой день месяца был много дней назад?

// let date = new Date(2012, 2, 1);

// function getDateAgo(date, numberOfDays) {
// let parsedDate = Date.parse(date);
// let parsedNumberOfDays = numberOfDays * 24 * 60 * 60 * 1000;
// let dayToShow = parsedDate - parsedNumberOfDays;
// return `${new Date(dayToShow).getDate()} ${date}`;

// or 

// 	let copyOfDayObj = new Date(date);
// 	copyOfDayObj.setDate(date.getDate() - numberOfDays);
// 	return copyOfDayObj.getDate();

// }

// console.log(getDateAgo(date, -28)); // 29, 
// console.log(getDateAgo(date, 2)); // 28, 
// console.log(getDateAgo(date, 365)); // 2, 

// ? Последнее число месяца?

// function getLastDayOfMonth(year, month) {
// 	let lastDayOfTheMonse = new Date(year, month + 1, 0);
// 	return lastDayOfTheMonse.getDate();
// }
// console.log(getLastDayOfMonth(2012, 0));
// console.log(getLastDayOfMonth(2012, 1));

// console.log(getLastDayOfMonth(2012, 2));
// console.log(getLastDayOfMonth(2012, 3));

// ? Сколько сегодня прошло секунд?

// function getSecondsToday() {
// 	let date = new Date();
// 	let now = Date.parse(date);
// 	console.log(now);
// //let toDayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()); // or
// 	let toDayStart = date.setHours(0, 0, 0, 0);
// 	console.log(toDayStart);
// 	return Math.round((now - toDayStart) / 1000);
// };
// console.log(getSecondsToday());


// ? Сколько секунд осталось до завтра?

// function getSecondsToTomorrow() {
// 	let day = new Date();
// 	console.log(day);
// 	let now = Date.parse(day);
// 	console.log(now);
// 	let tommorow = Date.parse(new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1));
// 	console.log(tommorow);
// 	return (tommorow - now) / 1000;
// }
// console.log(getSecondsToTomorrow());

// ?Форматирование относительной даты

// function formatDate(date) {
// 	let day = new Date(date)
// 	let event = Date.parse(day);
// 	let now = Date.now();
// 	((now - event) < 1000) ? console.log('right now') :
// 		((now - event) < 60000) ? console.log(`${Math.round((now - event) / 1000)} секунд назад`) :
// 			((now - event) < 3600000) ? console.log(`${Math.round((now - event) / 60000)} хвилин назад`) :
// 				console.log(`${day.getDate()}.${day.getMonth()}.${day.getUTCFullYear()}  ${day.getHours()}:${day.getMinutes()}`);

// }

// console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

// console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

// console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log(formatDate(new Date(new Date - 86400 * 1000)));

// ! Формат JSON, метод toJSON

// ? Преобразуйте объект в JSON, а затем обратно в обычный объект

// let user = {
// 	name: "Василий Иванович",
// 	age: 35
// };
// console.log("user: ", user);

// let json = JSON.stringify(user);
// console.log("json: ", json);

// let newUser = JSON.parse(json);
// console.log("newUser: ", newUser);

// ? Исключить обратные ссылки

// let room = {
// 	number: 23
// };

// let meetup = {
// 	title: "Совещание",
// 	occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
// 	place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;


// console.log(JSON.stringify(meetup, function replacer(key, value) {
// 	return (key != "" && value == meetup) ? undefined : value;
// }));

// !Продвинутая работа с функциями
// ! Рекурсия и стек

// ? Вычислить сумму чисел до данного

// ! max numbers of recurcion = 21471;
// #1 loop

// function sumTo(n) {
// 	let sum = 0;
// 	for (let i = 1; i <= n; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }

// #2 recursion

// function sumTo(n) {
// 	let sum = 0;
// 	(n === 1) ? sum = 1 : sum = n + sumTo(n - 1);
// 	return sum;
// }

// #3 арифметична прогресія

// function sumTo(n) {
// 	return n * (n + 1) / 2;
// }
// console.log(sumTo(100)); // 5050;  

// ? Вычислить факториал

// function factorial(n) {

// 	return (n == 1) ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120

// ? Числа фибоначчи

// function fib(n) {
// 	let start = new Date();
// 	let arr = [1, 1];
// 	for (let i = 2; i < n; i++) {
// 		arr[i] = arr[i - 2] + arr[i - 1];
// 	}
// 	let end = new Date();
// 	console.log(`${(end - start)} milisecunds `);
// 	return arr[n - 1];
// }

// function fib(n) {
// 	let start = new Date();
// 	let a = 1;
// 	let b = 1;
// 	for (let i = 3; i <= n; i++) {
// 		let c = a + b;
// 		a = b;
// 		b = c;
// 	}
// 	let end = new Date();
// 	console.log(`${(end - start)} milisecunds `);
// 	return b;
// }

// console.log(fib(3)); // 2
// console.log(fib(2)); // 1
// console.log(fib(1)); // 1
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757
// console.log(fib(100)); //354224848179262000000

// ? Вывод односвязного списка

// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null
// 			}
// 		}
// 	}
// };


// todo with loop

// function printList(obj) {
// 	while (obj) { // while not null
// 		console.log(obj.value);
// 		obj = obj.next;
// 	}
// }

// todo recurcion

// function printList(obj) {
// 	console.log(obj.value);
// 	if (obj.next) {
// 		printList(obj.next);
// 	}
// }

// printList(list);


// ? Вывод односвязного списка в обратном порядке

// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null
// 			}
// 		}
// 	}
// };
// todo recurcion

// function printList(obj) {

// 	if (obj.next) {
// 		printList(obj.next);
// 	}
// 	console.log(obj.value);
// }
// printList(list);

// todo with loop

// function printList(obj) {
// 	let arr = [];
// 	let some = obj;

// 	while (some) { // while not null
// 		arr.push(some.value);
// 		some = some.next;
// 	}
// 	for (let i = arr.length - 1; i >= 0; i--) {
// 		console.log(arr[i]);
// 	}
// }
// printList(list);

// ! Замикання 

//? Сумма с помощью замыканий

// function sum(a) { return (b) => a + b; }

// console.log(sum(2)(4));
// console.log(sum(-10)(14));


// ?Фильтрация с помощью функции

// function inBetween(a, b) {
// 	return (arg) => arg >= a && arg <= b;
// }
// function inArray(array) {
// 	return (arg) => array.includes(arg);
// }
// /* .. ваш код для  и inArray */
// let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// // console.log(arr.filter((number) => number >= 3 && number <= 6));
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// // console.log(arr.filter((number) => number == -5 || number == 1 || number == 2 || number == 10));
// console.log(arr.filter(inArray([-5, 1, 2, 10]))); // -5,1,2,10


// ? Сортировать по полю 

// function byField(str) {
// 	return (a, b) => (a[str] > b[str]) ? 1 : -1;
// }

// let users = [
// 	{ name: "John", age: 20, surname: "Johnson" },
// 	{ name: "Pete", age: 18, surname: "Peterson" },
// 	{ name: "Ann", age: 19, surname: "Hathaway" }
// ];
// // console.log(users[0].name)
// // console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));
// let byName = [...users.sort(byField('name'))];
// let byAge = [...users.sort(byField('age'))];
// let bySurname = [...users.sort(byField('surname'))];

// console.log('byName', byName);
// console.log('byAge', byAge);
// console.log('bySurname', bySurname);


// ?  Армия функций

// function makeArmy() {
// 	let shooters = [];

// 	for (let i = 0; i < 10; i++) {
// 		let shooter = function () { // функция shooter
// 			console.log(i); // должна выводить порядковый номер
// 		};
// 		shooters.push(shooter);
// 	}
// 	return shooters;
// }

// let army = makeArmy();

// army[0]();
// army[1]();
// army[2]();
// army[3]();
// army[4]();
// army[5]();
// army[6]();
// army[7]();
// army[8]();
// army[9]();

// ? Установка и уменьшение значения счётчика

// function makeCounter() {
// 	let count = 0;

// 	function pox() {
// 		return ++count;
// 	}
// 	pox.set = function (val) {
// 		return count = val - 1;
// 	}

// 	pox.decrease = function () {
// 		return count -= 1;
// 	}

// 	return pox;
// }

// let counter = makeCounter();

// console.log(counter());// 0
// console.log(counter());// 1
// console.log(counter());// 2
// console.log(counter());// 3
// console.log(counter());// 4
// console.log(counter());// 5

// counter.set(10); // установить новое значение счётчика

// console.log(counter()); // 10

// counter.decrease(); // уменьшить значение счётчика на 1
// counter.decrease(); // уменьшить значение счётчика на 1
// counter.decrease(); // уменьшить значение счётчика на 1
// counter.decrease(); // уменьшить значение счётчика на 1
// counter.decrease(); // уменьшить значение счётчика на 1
// counter.decrease(); // уменьшить значение счётчика на 1

// console.log(counter()); // 10 (вместо 11)

// ? Сумма с произвольным количеством скобок


// function sum(firstArg) {
// 	let summ = firstArg;

// 	function addNextArg(next) {
// 		summ += next;
// 		return addNextArg;
// 	}

// 	addNextArg.toString = function () {
// 		return summ;
// 	}

// 	return addNextArg;
// }

// alert(sum(1)(2));
// alert(sum(1)(2)(3));
// alert(sum(5)(-1)(2));
// alert(sum(6)(-1)(-2)(-3));
// alert(sum(0)(1)(2)(3)(4)(5));

// ? Планирование: setTimeout и setInterval

// todo setInterval

// function printNumbers(from, to) {
// 	let fm = from;

// 	let toStop = setInterval(() => {
// 		console.log(fm++);
// 		if (fm > to) {
// 			clearInterval(toStop);
// 			console.log('stop');
// 		}
// 	}, 1000);
// }

// printNumbers(1, 5);

// todo Рекурсивный setTimeout

// function printNumbers(from, to) {
// 	let fm = from;

// 	let toStop = setTimeout(function nextStep() {
// 		console.log(fm++);
// 		toStop = setTimeout(nextStep, 1000);
// 		if (fm > to) {
// 			clearTimeout(toStop);
// 			console.log('stop');
// 		}
// 	}, 1000);
// }

// printNumbers(1, 5);

// ! Декораторы и переадресация вызова, сall/apply

// ? Декоратор-шпион
function poop() {
    return 1;
}

function work(a, b) {
    console.log('result of main function - ', a + b);
}

// function spy(func) {

// 	function someFunc(...arg) {
// 		someFunc.calls.push(arg);

// 		return func.apply(this, arguments);
// 	}
// 	someFunc.calls = [];
// 	return someFunc;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
// 	console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// }

//  ? Задерживающий декоратор

// function f(x) {
// 	console.log(x);
// }

// // function delay(func, ms) {
// // 	function timer(...arg) {
// // 		function doingStaff() {
// // 			func.apply(timer, arg)
// // 		}
// // 		setTimeout(doingStaff, ms);
// // 	}
// // 	return timer;
// // }

// function delay(func, ms) {
// 	function timer() {
// 		return setTimeout(() => func.apply(this, arguments), ms);
// 	}
// 	return timer;
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 3000);

// f1000("test1", 'test3'); // показывает "test" после 1000 мс
// f1500("test2"); // показывает "test" после 1500 мс

// ? Декоратор debounce

// function debounce(func, ms) {
// 	let youCanNotPass = false;

// 	return function () {
// 		if (youCanNotPass) {
// 			console.log(this)
// 			return this;
// 		}

// 		func.apply(this, arguments);
// 		youCanNotPass = true;


// 		setTimeout(() => youCanNotPass = false, ms);
// 	}

// }


// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// ? Тормозящий (throttling) декоратор

// function f(a) {
//   console.log(a)
// }

// function throttle(func, ms) {

// 	let isThrottled = false,
// 		savedArgs,
// 		savedThis;

// 	function wrapper() {

// 		if (isThrottled) { // (2)
// 			savedArgs = arguments;
// 			savedThis = this;
// 			return;
// 		}

// 		func.apply(this, arguments); // (1)

// 		isThrottled = true;

// 		setTimeout(function () {
// 			isThrottled = false; // (3)
// 			if (savedArgs) {
// 				wrapper.apply(savedThis, savedArgs);
// 				savedArgs = savedThis = null;
// 			}
// 		}, ms);
// 	}

// 	return wrapper;
// }

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано


// ! Привязка контекста к функции

// ? Исправьте функцию, теряющую "this"

// function askPassword(ok, fail) {
// 	let password = prompt("Password?", '');
// 	if (password == "rockstar") ok();
// 	else fail();
// }

// let user = {
// 	name: 'Вася',

// 	loginOk() {
// 		alert(`${this.name} logged in`);
// 	},

// 	loginFail() {
// 		alert(`${this.name} failed to log in`);
// 	},

// };

// //askPassword(user.loginOk, user.loginFail);
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// ? Использование частично применённой функции для логина

// function askPassword(ok, fail) {
// 	let password = prompt("Password?", '');
// 	if (password == "rockstar") ok();
// 	else fail();
// }

// let user = {
// 	name: 'John',

// 	login(result) {
// 		alert(this.name + (result ? ' logged in' : ' failed to log in'));
// 	}
// };
// //  askPassword(?, ?);
// askPassword(user.login.bind(user, true), user.login.bind(user, false)) 


// ! Прототипное наследование

// ? Работа с прототипами

// let animal = {
// 	jumps: null
// };
// let rabbit = {
// 	__proto__: animal,
// 	jumps: true
// };

// alert(rabbit.jumps); // ? (1) 
// // true

// delete rabbit.jumps;

// alert(rabbit.jumps); // ? (2)
// // null

// delete animal.jumps;

// alert(rabbit.jumps); // ? (3)
// // undefind

// ? Алгоритм поиска

// let head = {
// 	glasses: 1
// };

// let table = {
// 	pen: 3
// };

// let bed = {
// 	sheet: 1,
// 	pillow: 2
// };

// let pockets = {
// 	money: 2000
// };

// // todo 1.

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;

// // console.log(pockets.pen); // 3
// // console.log(bed.glasses); // 1


// // todo 2.
// function longWay() {
// 	let start = new Date();
// 	console.log(pockets.glasses);
// 	let end = new Date();
// 	console.log((end - start) / 1000, 'sec');
// }

// function shortWay() {
// 	let start = new Date();
// 	console.log(head.glasses);
// 	let end = new Date();
// 	console.log((end - start) / 1000, 'sec');
// }

// 	//todo pockets.glasses
// 	//todo head.glasses

// longWay() // 0.005 sec
// shortWay() //0.001 sec

// ? Куда будет произведена запись?

// let animal = {
// 	eat() {
// 		this.full = true;
// 	}
// };

// let rabbit = {
// 	__proto__: animal
// };

// rabbit.eat();

// rabbit.__proto__ = null;
// console.log(rabbit.full);
// //todo answer is "to rabbit";


// ? Почему наедаются оба хомяка?


// let hamster = {
// 	stomach: [],

// 	eat(food) {
// 		this.stomach = [...this.stomach, food];   //  ? fix #1
// 	}
// };

// let speedy = {
// 	__proto__: hamster
// };

// let lazy = {
// 	__proto__: hamster
// };

// // ? fix #2
// // or we can give stomach for each hamsteres  
// // speedy.stomach = [];
// // lazy.stomach = [];

// // todo Этот хомяк нашёл еду

// speedy.eat("apple");
// console.log(speedy.stomach); // apple


// // todo У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple
// // answer
// // becouse they have one stomach for two hamsteres

// !  F.prototype

// ? Изменяем "prototype"

// 1. true
// 2. false
// 3. true
// 4. undefind

// ? Создайте новый объект с помощью уже существующего

// function Rabbit(name) {
// 	this.name = name;
// }

// let rabbit = new Rabbit('boris');
// console.log(rabbit.name); //bob
// let rabbit2 = new rabbit.constructor('bob');
// console.log(rabbit2.name); //bob

// ! Встроенные прототипы

// ? Добавить функциям метод "f.defer(ms)"
// Function.prototype.defer = function (ms, a) {
// 	setTimeout(() => this(a), ms);
// }

// function add(a) {
// 	console.log(a);
// }
// function f() {
// 	console.log("Hello!");
// }

// f.defer(3000); // выведет "Hello!" через 1 секунду
// add.defer(1500, 'Some string to show!');// Some string to show!

// ? Добавьте функциям декорирующий метод "defer()"

// Function.prototype.defer = function (ms) {
// // my answer
// 	return (...args) => setTimeout(() => this(...args), ms); 
//  // todo book answer
// 	// let firstThis = this;
// 	// return function (...args) {
// 	// 	setTimeout(() => firstThis.apply(this, args), ms);
// 	// }
// }

// function f(a, b) {
// 	alert(a + b);
// }

// f.defer(2000)(1, 2); // выведет 3 через 1 секунду.

// ! Методы прототипов, объекты без свойства __proto__

// ? Добавьте toString в словарь

// let dictionary = Object.create(null);

// // todo   my code
// dictionary.toString = function getAllKeys() {
// 	return Object.keys(this).join(',');
// }

// Object.defineProperty(dictionary, "toString", {
// 	enumerable: false
// });
// // todo   end of my code

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for (let key in dictionary) {
// 	console.log(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

// ? Разница между вызовами

// function Rabbit(name) {
// 	this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
// 	alert(this.name);
// };

// let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi(); // Rabbit
// Rabbit.prototype.sayHi(); // undefined
// Object.getPrototypeOf(rabbit).sayHi(); // undefined
// rabbit.__proto__.sayHi(); // undefined


// ! Классы

// ! Класс: базовый синтаксис

// ? Перепишите класс

// class Clock {

//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {

//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);

//     }

//     stop() {
//         clearInterval(this.timer);
//     };
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     };
// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

// ! Наследование классов

// ? Ошибка создания экземпляра класса

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);

// ? Улучшенные часы

// class Clock {
//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
// class ExtendedClock extends Clock {
//     constructor(option) {
//         super(option);
//         let { precision = 1000 } = option;
//         this.precision = precision;
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//     }
// };
// let s = new ExtendedClock({
//     template: 'h:m:s',
//     precision: 10000
// });
// s.start();



// ! Статические свойства и методы

// ? Класс расширяет объект?

// class Rabbit extends Object {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// let rabbit = new Rabbit("Кроль");

// alert(rabbit.hasOwnProperty('name')); // Ошибка

// ! Обработка ошибок
// !Обработка ошибок, "try..catch"

// ! Пользовательские ошибки, расширение Error

// ? Наследование от SyntaxError

// class FormatError extends SyntaxError {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;

//     }
// }

// let err = new FormatError("ошибка форматирования");

// alert(err.message); // ошибка форматирования
// alert(err.name); // FormatError
// alert(err.stack); // stack

// alert(err instanceof FormatError); // true
// alert(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)



// !!! Промисы, async/await

// ! Анимация круга с помощью колбэка
function start() {
    showCircle(150, 150, 100, (domELement) => {
        let p = document.createElement('p');
        let text = document.createTextNode('Hello, world!');
        p.appendChild(text);
        domELement.appendChild(p);
        domELement.classList.add('message-ball');
        p.classList.add('forP');
    });
}

function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
    }, 100);
    div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
    });
}
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// for (let i = 0; i < styles.length; i++) {
//   if (styles[i] === 'blues') {
//     styles[i] = 'classic';
//   }
// }

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} : ${array[i]}`);
//   }
// }

// logItems(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві - виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє - виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const userName = prompt('Your name');
//   if (array.indexOf(userName) === -1) {
//     alert('No user found');
//   } else {
//     alert(`Welcome ${userName}`);
//   }
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   let sum = 0;
//   let leng = 0;
//   for (const element of args) {
//     if (typeof element === 'number') {
//       sum += element;
//       leng++;
//     }
//   }

//   leng !== 0 ? console.log(sum / leng) : console.log(0);
// }

// calculateAverage(1, 4, 'hello', 4, 1);

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumOfNums(arr) {
//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//       res.push(arr[i]);
//     } else {
//       res.push(arr[i] + arr[i + 1]);
//     }
//   }
//   console.log(res);
// }

// function sumOfNums(arr) {
//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] + arr[i + 1]);
//   }
//   console.log(res.pop());
// }

// function sumOfNums(arr) {
//   const res = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     res.push(arr[i] + arr[i + 1]);
//   }
//   console.log(res);
// }

// sumOfNums(someArr);

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return 'Sorry, it is not an array!';
//   } else {
//     return Math.min(...numbers);
//   }
// }

// console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//   const arr = string.trim().split(' ');
//   let longest = '';
//   const longArr = [];
//   for (const str of arr) {
//     if (str.length > longest.length) {
//       longest = str;
//       longArr.length = 0;
//       longArr.push(str);
//     } else if (str.length === longest.length) {
//       longArr.push(str);
//     }
//   }
//   return `first:${longest};
//           array:${longArr}`;
// }

// console.log(findLongestWord('London is the capital of Great Britain'));

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// for (const elem of Object.keys(user)) {
//   console.log(`${elem}:${user[elem]}`);
// }

// console.table(user);

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let sum = 0;

// for (const salarie of Object.values(salaries)) {
//   sum += salarie;
// }

// console.log(sum);

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.exist() ? this.a + this.b : 'Error: no values';
//   },
//   mult() {
//     return this.exist() ? this.a * this.b : 'Error: no values';
//   },
//   exist() {
//     return typeof this.a === 'number' && typeof this.b === 'number';
//   },
// };

// calculator.read('hello', 'hello');
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//     let sum = 0;

//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       sum += fruit.price * fruit.quantity;
//     }
//     }
//     if (sum === 0) {
//         return sum
//     }

//   return sum;
// }

// console.log(calcTotalPrice(fruits, 'Банан'));

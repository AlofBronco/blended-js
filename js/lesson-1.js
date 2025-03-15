// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// function task1() {
//   const min = Math.floor(Math.random() * (59 - 0) + 0);
//   if (min >= 0 && min <= 15) {
//     alert(`${min} 1st quarter`);
//   } else if (min > 15 && min <= 30) {
//     alert(`${min} 2nd quarter`);
//   } else if (min > 30 && min <= 45) {
//     alert(`${min} 3rd quarter`);
//   } else if (min > 45 && min <= 59) {
//     alert(`${min} 4th quarter`);
//   } else {
//     alert('Error');
//   }
// }

// task1();

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// function task2() {
//   const num = +prompt('Write a number between 1 and 4');
//   switch (num) {
//     case 1:
//       alert('Winter');
//       break;
//     case 2:
//       alert('Spring');
//       break;
//     case 3:
//       alert('Summer');
//       break;
//     case 4:
//       alert('Fall');
//       break;

//     default:
//       alert('Error');
//       break;
//   }
// }

// task2();

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function task3() {
//   const min = prompt('Enter mins');
//   const hours = Math.floor(min / 60);

//   if (min < 0) {
//     alert('Error');
//     return;
//   }

//   alert(`${String(hours).padStart(2, 0)}:${String(min % 60).padStart(2, 0)}`);
// }

// task3();

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// function task4() {
//   const login = prompt('Your login');
//   console.log(login);

//   if (login === 'admin') {
//     const password = prompt('Your password');
//     if (password === 'i am admin') {
//       alert('Hello admin');
//     } else {
//       alert('Wrong password');
//     }
//   } else if (login === '' || login === null) {
//     alert('Canceled');
//   } else {
//     alert('I dont know you');
//   }
// }

// task4();

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// function task5(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }

// task5(5, 10);

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (!(typeof a === 'number') || !(typeof b === 'number')) {
//     return 'Not a number!';
//   }

//   return a < b ? a : b;
//   return Math.min(a, b);
// }

// console.log(min(9, 15));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
  return age >= 18 ? true : confirm('Still wanna see the website');
}

console.log(isAdult(15));

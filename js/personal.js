// Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.
function task1(arr) {
  let evenArr = [];
  let oddArr = [];
  for (const elem of arr) {
    if (elem % 2 === 0) {
      evenArr.push(elem);
    } else {
      oddArr.push(elem);
    }
  }
  return evenArr.concat(oddArr);
}

console.log(task1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.
function task2(arr) {
  let arrNew = [];
  for (const element of arr) {
    if (!arrNew.includes(element)) {
      arrNew.push(element);
    }
  }
  return arrNew;
}

console.log(task2([1, 2, 3, 3, 2, 1, 4, 5, 6]));

// Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.
// Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.
function task3(str) {
  return str[0] + str[str.length - 1];
}

console.log(task3('Hello'));

function fib(n) {
  if (n <= 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

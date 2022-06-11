//Homework
// #1
const arr = [1, 2, 3, 4, 8, 13];

function map(fn, array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray[i] = fn(array[i]);
  }
  return newArray;
}

function fn(x) {
  return x * 2;
}

document.write(map(fn, arr) + '<br>' + '<hr>');

// // #2

function checkAge(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}

function checkAge2(age) {
  return age > 18 || confirm('Батьки дозволили?');
}

console.log(checkAge(12));
console.log(checkAge2(8));

// // // Classwork
// // #1 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на Украинском языке

// function dayOfTheWeek(day) {
//   switch (day) {
//     case 1: {
//       return 'Понеділок';
//     }

//     case 2: {
//       return 'Вівторок';
//     }

//     case 3: {
//       return 'Середа';
//     }

//     case 4: {
//       return 'Четверг';
//     }

//     case 5: {
//       return "П'ятниця";
//     }

//     case 6: {
//       return 'Субота';
//     }

//     case 7: {
//       return 'Неділя';
//     }
//     default: {
//       return alert('Error');
//     }
//   }
// }

// document.write(dayOfTheWeek(5) + '<br>' + '<hr>');

// // #2 Дана строка вида 'var_text_hello'. Сделайте из него текст 'VarTextHello'.

// function ucfirst(string) {
//   return string[0].toUpperCase() + string.substring(1, initialString.length);
// }

// let initialString = 'var_text_hello';
// let newArr = initialString.split('_');
// for (let i = 0; i < newArr.length; i++) {
//   newArr[i] = ucfirst(newArr[i]);

//   initialString = newArr.join('');
// }
// document.write(initialString + '<br>' + '<hr>');

// // #3 Создайте функцию которая будет заполнять массив 10-ю иксами с помощью цикла.

// function arrayOfStars() {
//   const emptyArray = [];
//   for (i = 0; i < 10; i++) {
//     emptyArray[i] = 'x';
//   }
// }
// document.write(emptyArray + '<br>' + '<hr>');

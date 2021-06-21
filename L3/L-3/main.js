// 1) створити функцію яка приймає масив та виводить його
// let array = [1, 4, 6, 12, 99];

// function printarray(arr) {
//     console.log(arr);
// }
// printarray(array);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. 
// Для виведення використати попередню функцію.
// function createArray(length, min, max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (max - min) + min))
//     }
//     return array;
// }
// let array1 = createArray(10,10,100);
// printarray(array1);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function returnmin(a,b,c,) {
//     let min;
//     let max;

//     if (a <= b && a <= c) min = a
//     if (b <= a && b <= c) min = b
//     if (c <= b && c <= z) min = c

// console.log('min', min);
// return min;
// }

// const min = returnmin(5,10,19)
// console.log(min);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function returnmax(a,b,c,) {
//     let min;
//     let max;

//     if (a >= b && a >= c) max = a
//     if (b >= a && b >= c) max = b
//     if (c >= b && c >= a) max = c

// console.log('max', max);
// return max;
// }

// const max = returnmax(5,10,19)
// console.log(max);

// 5) створити функцію яка повертає найбільше число з масиву
// let maxArray = [5, 10, 19, 77, 55, 44];

// function returnmaxarray(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log('max', max)
//     return max;
// }

// const max1 = returnmaxarray(maxArray);
// console.log(max1);

// 6) створити функцію яка повертає найменьше число з масиву

// let minArray = [5, 10, 19, 77, 55, 44];

// function returnminarray(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log('min', min)
//     return min;
// }

// const min1 = returnminarray(minArray);
// console.log(min1);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function functionplus(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }


// const sum1 = functionplus(2, 4, 6, 8, 10);
// console.log(sum1);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function functionplus(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum/array.length;
// }


// const sum1 = functionplus(2, 4, 6, 8, 10);
// console.log(sum1);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function functionkey(array) {
//     let keys = [];
//     for (let item of array) {
//         let res = Object.keys(item);
//         keys.push(...res);
//     }
//     return keys;
// }
// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// const keysRes = functionkey(users);
// console.log(keysRes);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function functionkey(array) {
//     let values = [];
//     for (let item of array) {
//         let res = Object.values(item);
//         values.push(...res);
//     }
//     return values;
// }
// let users = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// const valuesRes = functionkey(users);
// console.log(valuesRes);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
// //   [3,5,7,9]
// function splitArray(array1, array2) {
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//         let sum = array1[i] + array2[i];
//         result.push(sum);
//     }
//     return result;
// }
// const splitArray1 = splitArray([1,2,3,4], [2,3,4,5]);
// console.log(splitArray1);
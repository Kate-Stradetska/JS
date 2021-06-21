// 1.створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// const names = [ 'Kate', 'Alex', 'Oleg', 'Maria','Roman'];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
// const numbers = [ 22, 33, 44, 55,66];
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// const values = [ '22', 'Kate', true, '55',false];
// console.log(values[0]);
// console.log(values[1]);
// console.log(values[2]);
// console.log(values[3]);
// console.log(values[4]);


// // 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let Parray = [ ];
// Parray[4] = 'Kate';
// Parray[3] = 2;
// Parray[2] = true;
// Parray[1] = 'street';
// Parray[0] = 'Dima';
// console.log(Parray);


// // За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for ( i = 0; i<10; i++)
// document.write('<div>hello</div>');

// // За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for ( i = 0; i < 10; i++)
// document.write(`<div>hello : ${i} </div>`);

// // За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
// document.write('<div>hello</div>');
// i++;
// }


// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
// document.write(`<div>hello : ${i} </div>`);
// i++;
// }

// // Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const masiv = [2, 55,67,99,12,41,10,80,100,109];
// for (let i = 0; i<masiv.length; i++)  {
//     console.log(masiv[i]);
// }


// // Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const masiv = ['2', '55','67','99','12','41','10','80','100','109'];
// for (let i = 0; i<masiv.length; i++)  {
//     console.log(masiv[i]);
// }

// // Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// const masiv = [2, 'Kate',67,'99','12', 41, 'solo', 80,'Lego', '109'];
// for (let i = 0; i<masiv.length; i++)  {
//     console.log(masiv[i]);
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//  let values = [ '22', 'Kate', true, 55, false, 44, 'Alex', 99, NaN,'ok'];
//  for (let i  = 0; i<values.length; i++){
//     if (typeof values[i] === 'boolean'){
//         console.log(values[i])
//     } 
//  }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let values = [ '22', 'Kate', true, 55, false, 44, 'Alex', 99, NaN,'ok'];
//  for (let i  = 0; i<values.length; i++){
//     if (typeof values[i] === 'number'){
//         console.log(values[i])
//     } 
//  }
// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let values = [ '22', 'Kate', true, 55, false, 44, 'Alex', 99, NaN,'ok'];
//  for (let i  = 0; i<values.length; i++){
//     if (typeof values[i] === 'string'){
//         console.log(values[i])
//     } 
//  }

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let pArray = [];
// pArray[9] = 'ok';
// pArray[8] = 55;
// pArray[7] = 22;
// pArray[6] = 'Dima';
// pArray[5] = true;
// pArray[4] = false;
// pArray[3] = 'class';
// pArray[2] = 105;
// pArray[1] = NaN;
// pArray[0] = 99;
// for (let i = 0; i<pArray.length; i++);
// console.log(pArray);

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<10; i++); {
// console.log('step : ',i);  
// document.write('step : ', i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100; i++); {
// console.log('step : ',i) 
// document.write(`step : ${i},<br>`)
// }

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log('step : ', i);
//     document.write(`step : ${i},<br>`);
// }


// Створити цикл for на 100 ітерацій.Вивести тільки парні кроки.через console.log + document.write
// for (let i = 0; i <100; i = 1++) {
    // if (i%2 === 0)
//     console.log('step : ', i);
//     document.write(`step : ${i},<br>`);
// }

// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i <100; i++){
//     if (i%2 === 1){
//         console.log('step : ', i);
//         document.write(`step : ${i},<br>`);
//     }
// }
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let usersWithCities = [];

// for (let user of usersWithId) {
//     for (let address of citiesWithId) {
//         if (user.id === address.user_id) {
//             let userWithAddress = { ...user, address: address };
//             usersWithCities.push(userWithAddress);
//             break;
//         }
//     }
// }
// console.log(usersWithCities);
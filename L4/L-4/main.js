// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [];
// users.push(new User(1,'Kate','Str','rr', 'motorolla'));
// users.push(new User(2,'Oleg','TTT','r@r', 'samsung'));
// users.push(new User(3,'Dima','Tre','tt@', 'siemens'));
// users.push(new User(4,'Alex','CXA','rKK@', 'motorolla'));
// users.push(new User(5,'Lana','Str','rr1', 'iphone'));
// users.push(new User(6,'Katerina','Ewq','2rr', 'siemens'));
// users.push(new User(7,'Lisa','Str','rr', 'motorolla'));
// users.push(new User(8,'Vasa','Str','r5r', 'samsung'));
// users.push(new User(9,'Kolia','Petr','ruu1', 'motorolla'));
// users.push(new User(10,'Vitia','Mor','rrkk3', 'iphone'));


// for(let user of users){
//   console.log(user);
// }

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//  class Order {
//      constructor(id, title){
//         this.id = id;
//         this.title = title; 
//      }
//  }
// class Client {
//      constructor(id, name, surname , email, phone, order) {
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.email = email;
//             this.phone = phone;
//             this.order = order;
//      }
//  }
//  const Kate = new Client(1, 'Kate', 'Str', 'rrr', 'iphone', [new Order(2,'socks'), new Order(3,'bread')])
//  console.log(Kate);


// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//  let driver = {naem:'Dima', age:35};
// function Car(model, manufacturer, year, maxSpeed, volumeEngine) {
//     this.model = model || hatchback;
//     this.manufacturer = manufacturer || Reno;
//     this.year = year || 2020;
//     this.maxSpeed = maxSpeed || 170;
//     this.volumeEngine =volumeEngine || 2.0;
//     this.driver = function () { 
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }; 
//     this.info = function () {
//         if (this.shafer) {
//             console.log(`
//                 model: ${this.model}
//                 manufacturer: ${this.manufacturer}
//                 year: ${ this.year}
//                 maxSpeed: ${this.maxSpeed}
//                 volumeEngine: ${this.volumeEngine}
//                 shafer: ${this.shafer.name}
//             `);
            
//         } else {
//             console.log(`
//                 model : ${this.model}
//                 manufacturer : ${this.manufacturer}
//                 year : ${ this.year}
//                 maxSpeed : ${this.maxSpeed}
//                 volumeEngine : ${this.volumeEngine}
//             `);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.shafer = driver;
//     }
//  }
//  let car = new Car('LAZ', 'laz', 1940);
//  car.changeYear(2021);
//  car.increaseMaxSpeed(200);
//  car.addDriver(driver);
//  car.info();
//  car.driver();



// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню

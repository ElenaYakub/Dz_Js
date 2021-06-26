// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User


// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.names = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const Ura = new User(1, 'Ura', 'Potapov', 'jggghjk@gmail.com', '4578903');
// const Bory = new User(2, 'Bory', 'Suvorov', 'suvorov78@gmail.com', '1764290');
// const Oly = new User(3, 'Oly', 'Komova', 'komova@gmail.com', '9076234');
// const Lila = new User(4, 'Lila', 'Lomova', 'lomova@gmail.com', '8906432');
// const Kola = new User(5, 'Kola', 'Dmitriev', 'dmitriev45@gmail.com', '1867904');
// const Stas = new User(6, 'Stas', 'Rukov', 'rukov55@gmail.com', '4326780');
// const Sveta = new User(7, 'Sveta', 'Norkova', 'norkova@gmail.com', '5764319');
// const Ivan = new User(8, 'Ivan', 'Suslov', 'suslov98@gmail.com', '9843126');
// const Viktor = new User(9, 'Viktor', 'Usovich', 'usovich@gmail.com', '9854123');
// const Valy = new User(10, 'Valy', 'Martichko', 'martichko@gmail.com', '9865321');

// console.log(Ola);


// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Shop {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const mass = [];
mass[0] = new Shop(1, 'Vova', 'Zayec', 'vzdd77d@gmail.com', '9834216', ['laptop', 'Video camera']);
mass[1] = new Shop(1, 'Ura', 'Potapov', 'jggghjk@gmail.com', '4578903', ['smartphone']);
mass[2] = new Shop(2, 'Bory', 'Suvorov', 'suvorov78@gmail.com', '1764290', ['netbook', 'pen', 'table']);
mass[3] = new Shop(3, 'Oly', 'Komova', 'komova@gmail.com', '9076234');
mass[4] = new Shop(4, 'Lila', 'Lomova', 'lomova@gmail.com', '8906432');
mass[5] = new Shop(5, 'Kola', 'Dmitriev', 'dmitriev45@gmail.com', '1867904');
mass[6] = new Shop(6, 'Stas', 'Rukov', 'rukov55@gmail.com', '4326780');
mass[7] = new Shop(7, 'Sveta', 'Norkova', 'norkova@gmail.com', '5764319');
mass[8] = new Shop(8, 'Ivan', 'Suslov', 'suslov98@gmail.com', '9843126');
mass[9] = new Shop(9, 'Viktor', 'Usovich', 'usovich@gmail.com', '9854123');

console.log(mass);
// mass[0] = { id: 1, name: }

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:
// --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// --info() - яка виводить всю інформацію про автомобіль
// --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// --changeYear(newValue) - змінює рік випуску на значення newValue
// --addDriver(driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     model: 'Lada',
//     manufacture: 'Vaz',
//     year: 1991,
//     maxSpeed: 100,
//     volumeEngine: 'just solar',
//     shafer: 'Ivan',
//     drive: function () {
//         console.log(`Iдемо зi швидкiстю ${this.maxSpeed}  на годину`);
//     },
//     info: function () {
//         console.log(`model: ${this.model} manufacture: ${this.manufacture} year: ${this.year} maxSpeed: ${this.maxSpeed} volumeEngine: ${this.volumeEngine} shafer: ${this.shafer.name}`)
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     changeYear: function (newValue) {
//         this.year = newValue;
//     },
//     addDriver: function (driver) {
//         this.shafer = driver;
//     }
// };
// let drivers = { name: 'Ivan Larin', age: 35 };

// car.drive();

// car.increaseMaxSpeed(100);
// car.changeYear(1995);
// car.addDriver(drivers);
// car.info();

// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:
// --drive() - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// --info() - яка виводить всю інформацію про автомобіль
// --increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// --changeYear(newValue) - змінює рік випуску на значення newValue
// --addDriver(driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(
//         model,
//         manufacture,
//         year,
//         maxSpeed,
//         volumeEngine,
//         shafer) {

//         this.model = model || 'Lada';
//         this.manufacture = manufacture || 'Vaz';
//         this.year = year || 1994;
//         this.maxSpeed = maxSpeed || 80;
//         this.volumeEngine = volumeEngine || 'solar';
//     }
//     drive() {
//         console.log(`Iдемо зi швидкiстю ${this.maxSpeed}  на годину`);
//     }
//     info() {
//         console.log(`model: ${this.model} manufacture: ${this.manufacture} year: ${this.year} maxSpeed: ${this.maxSpeed} volumeEngine: ${this.volumeEngine}`)
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver(driver) {
//         this.shafer = driver;
//     }
// }
// // let drivers = { name: 'Ivan Larin', age: 35 };

// let car = new Car();
// car.drive();

// car.increaseMaxSpeed(100);
// car.changeYear(1995);
// car.info();

// 5 Взяти масив з завдання 1.
//     - Відфільтрувати, залишивши тільки об'єкти з парними id
//         - Відсортувати його по id.по зростанню
//             - Відсортувати його по id.по спаданню

// let users = [
//     { id: 1, name: 'Ura', surname: 'Potapov', email: 'jggghjk@gmail.com', phone: '4578903' },
//     { id: 2, name: 'Bory', surname: 'Suvorov', email: 'suvorov78@gmail.com', phone: '1764290' },
//     { id: 3, name: 'Oly', surname: 'Komova', email: 'komova@gmail.com', phone: '9076234' },
//     { id: 4, name: 'Lila', surname: 'Lomova', email: 'lomova@gmail.com', phone: '8906432' },
//     { id: 5, name: 'Kola', surname: 'Dmitriev', email: 'dmitriev45@gmail.com', phone: '1867904' },
//     { id: 6, name: 'Stas', surname: 'Rukov', email: 'rukov55@gmail.com', phone: '4326780' },
//     { id: 7, name: 'Sveta', surname: 'Norkova', email: 'norkova@gmail.com', phone: '5764319' },
//     { id: 8, name: 'Ivan', surname: 'Suslov', email: 'suslov98@gmail.com', phone: '9843126' },
//     { id: 9, name: 'Viktor', surname: 'Usovich', email: 'usovich@gmail.com', phone: '9854123' },
//     { id: 10, name: 'Valy', surname: 'Martichko', email: 'martichko@gmail.com', phone: '9865321' }
// ];

// let filterUser = [];
// for (const user of users) {
//     if (user.id % 2 === 0) {
//         filterUser.push(user);
//     }
// }
// console.log(filterUser);

// --------2 variant

// let filter = users.filter(function (user) {
//     return user.id % 2 === 0;
// });
// console.log(filter);

// ----------

// let sort = users.sort(function (user1, user2) {
//     return user2.id - user1.id;
// });
// console.log(sort);

// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order.по спаданню
// 


let sort = mass.sort(function (user1, user2) {
    return user2.order - user1.order;
});
console.log(sort);
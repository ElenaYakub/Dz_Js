
// let userName = 'Вася';

// function showMessage() {
//     userName = "Петя"; // (1) изменяем значение внешней переменной

//     let message = 'Привет, ' + userName;
//     alert(message);
// }

// alert(userName); // Вася перед вызовом функции

// showMessage();
// -----------
// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[array.length] = i;
//     // console.log(array);
// }
// function get() {
//     let message = 'Массив: ' + array;
//     document.write(message);
// }
// get();
// let array = [1, 2, 3, 4, 5, 6, 7];
// -------------------------

// let h = 'he!';
// document.write(h);

// function w() {
//     document.write('hello');
// }
// w();
// ----------------------------
// function writer(msg, sym) {
//     document.write(`<h2>${msg}${sym}</h2>`);
// }
// writer('hello', '!');
// writer('hi', '?');
// ------------------------------
// 2 Проба: створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function get() {
//     document.write(array);
// }

// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[array.length] = i;
//     console.log(array);
// }

// get();
// function get(array) {
//     // let array = [];                     /*условие для всех ниже*/
//     for (let i = 0; i < 20; i++) {
//         array[i] = Math.floor(Math.random() * 100);
//     }
//     console.log(array);
// }
// console.log(getRandomInt(3));




// 1) створити функцію яка приймає масив та виводить його

// let array = [];
// for (let i = 0; i < 20; i++) {
//     array[array.length] = i;
//     // console.log(array);
// }
// function printArray(arr) {
//     console.log(arr);
//     // for (const arrElement of arr) {
//     //     console.log(arrElement);
//     // }
// }
// printArray(array)

// 2) створити функцію яка заповнює масив рандомними числами та виводить його.Для виведення використати попередню функцію.

// function creatArray(length, min, max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (max - min) + min))
//     }
//     return array;
// }
// const array1 = creatArray(10, 10, 100);
// printArray(array1);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numThree(a, b, c) {
//     let min;
//     let max;

//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= b && c <= a) min = c;

//     console.log('min', min);
//     return min;
// }
// const min = numThree(3, 2, 3);
// console.log(min);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numThreeMax() {
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) max = item;
//     }
//     // console.log('max', max);
//     return max;
// }
// const max = numThreeMax(8, 2, 3);
// console.log('max', max);

// 5) створити функцію яка повертає найбільше число з масиву

// const retMaxArr = (array) => {
//     let max = array[0];
//     for (const item of array) {
//         if (max < item) max = item
//     }
//     return max;
// }
// const retMaxArr1 = retMaxArr([10, 2, 3, 4, 5]);
// console.log(retMaxArr1);

// 6) створити функцію яка повертає найменьше число з масиву

// const retMinArr = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (min > item) min = item
//     }
//     return min;
// }
// const retMinArr1 = retMinArr([10, 26, 3, 4, 5]);
// console.log(retMinArr1);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function plus(mass) {
//     let pl = 0;
//     for (i = 0; i < mass.length; i++)
//         pl += mass[i];
//     console.log(pl / mass.length);
// }
// let arr = [3, 4, 5];
// plus(arr);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


// function average(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum / array.length;
// }
// const average1 = average([2, 2, 4, 4]);
// console.log('average1', average1);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{ name: 'Dima', age: 13 }, { model: 'Camry' }] ===> [name, age, model]

// 
// function keysMas(mas) {

//     let key = [];
//     for (let i = 0; i < mas.length; i++) {
//         for (let keys in mas[i]) {
//             key.push(keys);
//         }
//     }
//     return key;
// }
// let keysMas1 = keysMas([{ name: 'Dima', age: 13 }, { model: 'Camry' }]);
// console.log(keysMas1);
// -------

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let massKay = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];  //!!!!!!!!!!!!!!!!!!?
// // ---------
// let values = Object.values(massKay);
// console.log(values);
// --------
// for (let temp of massKay) {
//         for (let i = 0; i < temp.length; i++) {
//                 document.write(temp[i]);

//                 (`<div>${temp.name}</div>`);
//         }
// }

// let mass = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];
// function massKay(name, age, model) {
//     document.write(`${name} ${age} ${model}`);
// }
// for (let x of mass) {
//     massKay(x.name, x.age, x.model)
// }

// let user = { name: 'Vasy', age: '31', status: 'true', skills: ['js', 'html'] };
// let { name: xxx, age, status, skills } = user;
// console.log(xxx, age, status, skills);

// function printM({ name, age, status, skills }) {
//         console.log(name, age, status, skills);
// }
// printM(user);

    // 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    //   EXAMPLE:
    //   [1,2,3,4]
    //   [2,3,4,5]
    //   результат
    //   [3,5,7,9]

    // function plusArr(arr1, arr2) {
    //     let sum = [];
    //     for (let i = 0; i < arr1.length; i++) {
    //         sum.push(arr1[i] + arr2[i]);
    //     }
    //     return sum;
    // }
    // const plusArr1 = plusArr([1, 2, 3, 4], [2, 3, 4, 5]);
    // console.log(plusArr1);



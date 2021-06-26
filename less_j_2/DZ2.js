// --створити масив з:
// - з 5 числових значень
//     - з 5 стічкових значень
//         - з 5 значень стрічкового, числового та булевого типу
//             - та вивести його в консоль

// let numers = [5, 7, 99, 54, 100];
// let names = ['Liza', 'Lena', 'Sasha', 'Vova', 'Ura'];
// let stringes = ['Lenovo', true, 10, false, 'да'];
// console.log(numers);
// console.log(names);
// console.log(stringes);

// --Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.Вивести в консоль
// let users = [];
// users[0] = 'Kola';
// users[1] = 'Ola';
// users[3] = 'Vita';

// console.log(users)

// или
for (let temp of [{ user: 'Kola', age: 10 }, { user: 'Ola', age: 21 }, { user: 'Vita', age: 30 }]) {
    if (temp.age > 20) {
        console.log(temp.user + ' ' + temp.age);
    }
}
// ----------------------------------------------------------------------
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Text</div>`);
// }

//     - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Text: ${i} Hey!</div>`);
// }

//         - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Text20</h1>`);
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Text20: ${i}</h1>`);
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// const arr = [5, 18, 88, 2, 78, 9, 7, 90, 3, 44];
// for (let j = 0; j < arr.length; j++)
//     console.log(arr[j]);

// - Створити масив з 10 строкрових елементів.Вивести в консоль всі його елементи в циклі.

// const names = ['Liza', 'Lena', 'Sasha', 'Vova', 'Ura', 'Angela', 'Lola', 'Denis', 'Grisha', 'Ola'];
// for (let j = 0; j < names.length; j++)
//     console.log(names[j]);

// - Створити масив з 10 елементів будь - якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

const test = ['Lenovo', true, 10, false, 'да', 80, 'age', 67, 'Grisha', 'Ola'];/*для четырех заданий  */

// for (let j = 0; j < test.length; j++)
//     console.log(test[j]);
// --------------------------------------- 2
// for (let j = 0; j < test.length; j++) {
//     if (typeof test[j] === 'boolean') {
//         console.log(test[j]);
//     } else {
//     }
// }
// ------------------------------------------3
// for (let j = 0; j < test.length; j++) {
//     if (typeof test[j] === 'number') {
//         console.log(test[j]);
//     } else {
//     }
// }
// -------------------------------------------4
// for (let j = 0; j < test.length; j++) {
//     if (typeof test[j] === 'string') {
//         console.log(test[j]);
//     }
// }
// -------------------------------------------------
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки через console.log + document.write

// let amptyArray = [];    
// amptyArray[2] = 'text';
// amptyArray[1] = true;
// amptyArray[0] = 56;
// amptyArray[3] = 'Hello world!';
// amptyArray[9] = 88;
// amptyArray[4] = 'Bye!';
// amptyArray[5] = false;
// amptyArray[6] = 9;
// amptyArray[7] = { product: 'smartfon', price: 2700, };
// amptyArray[8] = NaN;

// for (let i = 0; i < amptyArray.length; i++) {
//     console.log(amptyArray[i]);
// }
// --------------------------------------------------------2
// for (let i = 0; i < 10; i++) {
// console.log('step : ', i); /* или */
// document.write('step: ', i + ' ' + '</br>'); /* или */
// document.write(`<div>step: ${i}</div>`); /* или */
// }
// ----------------------------------------------------------3
// for (let i = 0; i < 100; i++) {
//     console.log('step : ', i); /* или */
//     document.write(`<div>step: ${i}</div>`); /* или */
// }
// -------------------------------------------------------------4
// for (let i = 0; i < 200; i = i + 2) {
//     console.log('step : ', i); /* или */
//     document.write(`<div>step: ${i}</div>`); /* или */
// }
// -----------------------------------------------------------5
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('step : ', i); /* или */
//         document.write(`<div>step: ${i}</div>`); /* или */
//     }
// }
// -----------------------------------------------------------6
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('step : ', i); /* или */
//         document.write(`<div>step: ${i}</div>`); /* или */
//     }
// }
// // ----------------------------------------------------------------------
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for of зібрати всі букви в слово.

// let arr = ['a', 'b', 'c'];
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i];
// }
// console.log(str);
// ---------------------------------------------------------------------------
// let arr = ['a', 'b', 'c'];

// let i = 0;
// let str = '';
// while (i < arr.length) {
//     str = str + arr[i];
//     i++
// }
// console.log(str);
// ----------------------------------------------------------------------------------
// let arr = ['a', 'b', 'c'];
// let str = '';
// for (const string of arr) {
//     str = str + string;
// }
// console.log(str);
// ---------------------------------------------------------------------------------
// let arr = ['a', 'b', 'c']; /*без запятых*/
// let str = '';
// for (const string in arr) {
//     str = str + arr[string];
// }
// console.log(str);
// document.write(str);
// ----------------------------------------------------------------------------------------
// - Дан масив['a', 'b', 'c'].Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c'];

// for (let i = 1; i <= 3; i++) {
//     array[array.length] = i;
// }
// console.log(array);
// document.write(array);
// -----
// let array = ['a', 'b', 'c']; /* console.log([...array, 1, 2, 3]);*/

// for (let i = 1; i <= 3; i++) {
//     array.push(i);
// }
// console.log(array);
// document.write(array);
// --------------------------------------------------------------------------------------
// - Дан масив[1, 2, 3].Зробіть з нього новий масив[3, 2, 1].
// let mas = [1, 2, 3];
// let newMas = mas.reverse();
// console.log(newMas);
// console.log(mas);


// - Дан масив[1, 2, 3].Додайте йому в кінець елементи 4, 5, 6.
// let mas = [1, 2, 3];
// for (let i = 4; i <= 6; i++) {
//     mas.push(i);
// }

// console.log(mas);
// document.write(`<h1> ${mas} </h1>`);
//     - Дан масив[1, 2, 3].Додайте йому в початок елементи 4, 5, 6.
// let mas = [1, 2, 3];
// for (let i = 6; i >= 4; i--) {
//     mas.unshift(i);
// }
// console.log(mas);

//         - Дан масив[1, 2, 3, 4, 5].Перетворіть масив в[4, 5].
// let mas = [1, 2, 3, 4, 5];
// mas = [4, 5];
// console.log(mas);

// - Дан масив[1, 2, 3, 4, 5].Перетворіть масив в[1, 2].
// let mas = [1, 2, 3, 4, 5];
// mas = [1, 2];
// console.log(mas);

// - Дан масив[1, 2, 3, 4, 5].Зробіть з нього масив[1, 2, 3, 'a', 'b', 'c'].
// let mas = [1, 2, 3, 4, 5];
// mas = [1, 2, 3, 'a', 'b', 'c'];
// console.log(mas);
// ------------------------------------------------------
// створити пустий масив та:
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let array1 = [];
// let array2 = [];
// for (let i = 0; i < 50; i++) {

//     array1[i] = i * 2;
//     array2[i] = i * 2 + 1;
// }
// console.log(array1);
// console.log(array2);
// ------------------------------------------------------------
// c.Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d.Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732(Google: Generate random number JS)
// let array = [];                     /*условие для всех ниже*/
// for (let i = 0; i < 20; i++) {

//     array[i] = Math.floor((Math.random() * 732 - 8) + 8)
// }
// console.log(array);

// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 2; i < array.length; i += 3) {
//     console.log(array[i]);
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newAr = [];
// for (let i = 2; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         newAr.push(array[i]);
//     }
// }
// console.log(newAr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним 
// EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] -> Має бути виведено 1, 9, 56

// for (let i = 0; i < array.length; i++) {
//     if (array[i + 1] % 2 === 0) {
//         console.log(array[i]);
//     }
// }
// ----------------------------------------------------------------------------------------
// 6. Є масив з числами[100, 250, 50, 168, 120, 345, 188], які характеризують вартість окремої покупки. Обрахувати середній чек.
// let masS = [100, 250, 50, 168, 120, 345, 188];
// for (let kay of masS) {
//   //  kay = masS * kay;
//     console.log(kay);      //!!!!!!!!!!!!!!!!!!!
// }

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [];                     /*условие для всех ниже*/
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.floor((Math.random() * 32))
// }
// console.log('array');
// console.log(array);
// let newArr = [];
// for (let i = 0; i < array.length; i++) {
//     newArr[i] = array[i] * 5;
// }
// console.log(newArr);

//  8. Створити масив з будь якими значеннями(стрінги, числа, і тд...).пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//             - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     { id: 1, name: 'vasya', age: 31, status: false },
//     { id: 2, name: 'petya', age: 30, status: true },
//     { id: 3, name: 'kolya', age: 29, status: true },
//     { id: 4, name: 'olya', age: 28, status: false }
// ];

// let citiesWithId = [
//     { user_id: 3, country: 'USA', city: 'Portland' },
//     { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//     { user_id: 2, country: 'Poland', city: 'Krakow' },
//     { user_id: 4, country: 'USA', city: 'Miami' }
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id".
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     }
// ]
// console.log(usersWithCities);
        // ----------------------------------------------------
// 
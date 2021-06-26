// 1
// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);
// 2
// let a1 = 4 + 30;
// let a2 = (36 / 6) * 2;
// let a3 = 11 * 6;
// let a4 = 20 * 3 + 30;
// let a5 = (7 * 9) + (3 * 7) + 3;

// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// 3
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';

// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);
// 4
// let h = prompt();
// let w = prompt();
// s = h * w;
// alert(s);
// 5.  Напиши код, который находит объем цилиндра высотой 10м(переменная heightC) и диаметром основания 4м(dC),
//     результат поместите в переменную v.
// let heightC = 10;
// let dC = 4;
// let r = dC / 2;
// // let v = (Math.PI / 4 * (dC * dC) * heightC);
// let v = (Math.PI * (r * r) * heightC);
// alert(v);

// 6. У прямоугольного треугольника две стороны n(со значением 3) и m(со значением 4).
// Найдите гипотенузу k по теореме Пифагора(нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// Возведем число 5 во вторую степень
// let n = 3;
// let m = 4;
// k = Math.pow(n, 2) + Math.pow(m, 2);
// console.log(k);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби(каждой на новой строки спомощью \n).
// let person = {
//     firstName: 'Оксана',
//     middleName: 'Евгенiвна',
//     lastName: 'Олiйникова',
//     age: '39',
//     hobby: ['Html', 'Css', 'Js']
// }
// console.log(person.firstName);
// alert(`${person.firstName}\n${person.middleName}\n${person.lastName}\n${person.age}\n${person.hobby[2]}`);
// alert(person.firstName + ' ' + person.middleName + ' ' +  person.lastName);

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//     Локальной переменной concatenation присвоить результат конкатенации 3 - х строк: str1, str2, str3.
// Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?';
// let concatenation = (str1 + ' ' + str2 + ' ' + str3);
// document.write(concatenation);

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода ? и почему ?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");потому-что строки плюсует как символы - остальное приводит к числу.
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>"); 

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let summ = promt('' + '');

// let a = +prompt('Введите 1-ое число');
// let b = +prompt('Введите 2-ое число');
// let summ = a + b;
// alert(summ);


// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32, а вывод результата при помощи метода alert

// let fName = prompt('имя');
// let mName = prompt('отчество');
// let lName = prompt('фамилия');
// let ageY = prompt('возраст');
// alert(`Доброго вечера ${fName} ${mName} ${lName} мои поздравления что вам ${ageY}`);
// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let a = +prompt('Введите 1-ое число');
// let b = +prompt('Введите 2-ое число');
// let c = +prompt('Введите 3-ое число');

// if ((a > b) && (b > c)) {
//     console.log(c, b, a);
// }
// else if (a > c && c > b) {
//     console.log(b, c, a);
// }
// else if (b > a && a > c) {
//     console.log(c, a, b);
// }
// else if (b > c && c > a) {
//     console.log(a, c, b);
// }
// else if (c > b && b > a) {
//     console.log(a, b, c);
// }
// else if (c > a && a > b) {
//     console.log(b, a, c);
// }
// else {
//     console.log('Введите числа!');
// }

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
// let age = +prompt('Введите число');
// if (age > 88) {
//     isOld = 'Вы в возрасте.'
// } else {
//     isOld = 'Вы еще молоды!';
// }
// alert(isOld);
// -------------------------------------------------------------
// let isRoadClear = confirm('Машин нет?');
// if (isRoadClear) {
//     go = 'Можете идти.'
// } else {
//     go = 'Подождите пока проедут!';
// }
// alert(go);
// ----------------------------------------------------------------
// let traffic = prompt('Какой цвет светофора?');
// let green = 'зеленый';
// let yellow = "желтый";
// let red = "красный";

// if (traffic == green) {
//     alert("иди");
// }
// else if (traffic == yellow) {
//     alert("подожди");
// }
// else if (traffic == red) {
//     alert("стой");
// }
// else {
//     alert('Введите цвет!');
// }

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!





// ---------------------------------------------------------------------на потом
// var isAdmin = confirm("Вы - администратор?");
// alert(isAdmin);
// ------
// число, которое нужно угадать, в данном случае 7
// const number = 7;
// let result = false;

// while (!result) {
//     const answer = prompt('Угадай число от 1 до 10?');
//     if (answer === null) {
//         break;
//     }
//     switch (+answer) {
//         case number - 2:
//         case number + 2:
//             alert('Уже теплее!');
//             break;
//         case number - 1:
//         case number + 1:
//             alert('Горячо!');
//             break;
//         case number:
//             alert(`Ты угадал! Это число ${number}.`);
//             result = true;
//             break;
//         default:
//             alert('Холодно!');
//     }
// }
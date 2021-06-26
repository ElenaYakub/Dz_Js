// let str = 'HELLO WORLD';

// console.log(str[0]); /*выводит 0-й символ  H*/
// let s = str.replace('HELLO', 'GOOD BYE'); /* заменяет одно слово на другое */
// let s = str.replaceAll('O', 'X'); /* заменяет все символы на другой символ */
// console.log(s);
// let s = str.slice(0, 6);  /* вырезает с 0 по 6 элемент не включительно */
// console.log(s);
// console.log(str);
// ----------------------
// let userNames = 'Olga,Ivan,Kristi,Oleg'
// // ['Olga','Ivan','Kristi','Oleg'] - делает из строки массив, разделяя по запятой
// let strings = userNames.split(',');
// console.log(strings);


// let email = '              Oleinikova588@gmail.com'
// let email2 = '       oleinikova588@gmail.com           '

// console.log(email);
// console.log(email.trim());
// console.log(email2);
// console.log(email2.trim());
// console.log(email);
// console.log(email.toLowerCase());/* сделать все маленькие буквы  */
// console.log(email2);
// console.log(email2.toUpperCase());/* сделать все большие буквы */

// console.log(email === email2);/*проверка: одинаковые имейлы  */
// console.log(email.trim().toLowerCase() === email2.trim().toLowerCase());

// let phone = '+38067693832';

// let b = phone.startsWith('+380');
// let b = phone.endsWith('+380');
// console.log(b);
// console.log(b1);

// let email = 'oleinikova588@gmail.com'

// console.log(email.includes('@')); /*сразу вывели с проверкой на собачку */

// let b = email.includes('@');
// console.log(b);

// let person = {
//     name: 'Виталий',
//     age: 27,
//     getAge: function () {
//         return 'Возраст: ' + this.age;
//     }
// }


// -----------------------(Duda)
// function info(word) {
//     // console.log('Hello');
//     console.log(word + '!');
// }

// // info("Hello");
// function summa(a, b) {
//     let res = a + b;
//     info(res);
// }
// ---------------сумма через цыкл в функции
// function summa(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//         sum += arr[i];
//     console.log(sum);
// }
// let array1 = [3, 5, 7, 8];
// summa(array1);
// ----------------возвращение значения, return(результат поместить в переменную)
// function summa(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++)
//         sum += arr[i];
//     return (sum);
// }
// let array1 = [3, 5, 7, 8];
// let res = summa(array1);/*записали функцию в переменную  */
// res *= 2;   /*дополнительно умножили на 2  */
// console.log("Результат: " + res);

// ------------------------------//решения 3
// Створити функцію яка приймає масив будь яких объектів, та поверта загальну кiлькiсть полiв в них

// const user = [{ name: 'Dima', age: 13 }, { model: 'Camry' }];
// function kayObj(obj) {
//     let x = 0;
//     for (const item of obj) {
//         if (typeof item === 'object') {
//             x++;
//         }
//     }
//     return x;
// }
// const num = kayObj(user);
// console.log(num);

// -----------------
    // let sum = 0;
    // for (i = 4; i < 8; i++) {
    //     if (i == 6) {
    //         continue;
    //     }
    //     sum += i;
    // }
    // document.write(sum);

    // do {
    //     document.write(i);
    //     i++;
    // }
    // while (i < 10);

    // function myFunction(name) {
    //     alert("Calling a Function! " + name);
    // }
    // myFunction('Ola');
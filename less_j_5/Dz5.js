// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

// let p = document.getElementById('content');
// console.log(p);


// p.style.color = 'silver';
// p.style.height = '50px';
// p.style.background = 'red';
// p.style.background = 'blue';

// b) отримує текст з блоку з id "rules"

// let x = document.getElementsByClassName('bp');
// console.log(x);


// c) замініть текст параграфа з id 'content' на будь - який інший

// p.innerText = 'iнший текст, iнший текст, iнший текст, iнший текст, iнший текст, iнший текст, iнший текст, iнший текст'

// d) замініть текст параграфа з id 'rules' на будь - який інший

// for (const xElement of x) {
//     xElement.innerText = 'другий текст, другий текст, другий текст, другий текст, другий текст, другий текст, другий текст'
// }

// e) змініть кожному елементу колір фону на червоний

// let all_mass = document.body.children;
// console.log(all_mass);

// for (const bElement of all_mass) {
//     bElement.style.background = 'red';
// }

// f) змініть кожному елементу колір тексту на синій

// for (const bElement of all_mass) {
//     bElement.style.color = 'blue';
// }

// g) отримати весь список класів елемента з id = rules і вивести їх в console.log

let elem = document.querySelectorAll('#rules');

console.log(elem);

// h) отримати всі елементи з класом fc_rules

// let frules = document.getElementsByClassName('fc_rules');
// console.log(frules);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний


// for (const rElement of frules) {
//     rElement.style.color = 'red'
// }




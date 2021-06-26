// function ask(question, yes, no) { //Learn, стрелочные функции
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );
// -------------
// let Ura = {     //Лекция 4, обычный массив
//     id: 1,
//     names: 'Ura',
//     surname: 'Potapov',
//     email: 'jggghjk@gmail.com',
//     phone: '4578903',
//     seyHello: () => {
//         console.log('Hello!')
//     }
// }
// let Bory = {
//     id: 2,
//     names: 'Bory',
//     surname: 'Suvorov',
//     email: 'suvorov78@gmail.com',
//     phone: '1764290',
//     seyHello: () => {
//         console.log('Hello!')
//     }
// }
// -------------------------
let array = [];
for (let i = 0; i < 20; i++) {
    array[array.length] = i;
    // console.log(array);
}
function printArray(arr) {
    console.log(arr);
    // for (const arrElement of arr) {
    //     console.log(arrElement);
    // }
}
printArray(array)
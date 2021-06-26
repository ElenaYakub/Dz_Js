let str = 'hello';
let logo = 'owu';
let mail = 'com';
let len = 'ua';
let num = 1;
let numt= 10;
let numn = -999;
let thre = 123;
let pi = 3.14;
let numd = 2.7;
let nums = 16;
let isOld = true;
let isAdm = false;
// console.log(str); alert(str); document.write(str);
// console.log(logo); alert(logo); document.write(logo);
// console.log(mail); alert(mail); document.write(mail);
// console.log(len); alert(len); document.write(len);
// console.log(num); alert(num); document.write(num);
// console.log(numt); alert(numt); document.write(numt);
// console.log(numn); alert(numn); document.write(numn);
// console.log(thre); alert(thre); document.write(thre);
// console.log(pi); alert(pi); document.write(pi);
// console.log(numd); alert(numd); document.write(numd);
// console.log(nums); alert(nums); document.write(nums);
// console.log(isOld); alert(isOld); document.write(isOld);
// console.log(isAdm); alert(isAdm); document.write(isAdm);
str = 'goodbye';
logo = 'ula';
mail = 'gmail';
len = 'ru';
num = 2;
numt= 14;
numn = -88;
thre = 55;
pi = 2.3;
numd = 4.7;
nums = 22;
isOld = false;
isAdm = true;
// console.log(str); alert(str); document.write(str);
// console.log(logo); alert(logo); document.write(logo);
// console.log(mail); alert(mail); document.write(mail);
// console.log(len); alert(len); document.write(len);
// console.log(num); alert(num); document.write(num);
// console.log(numt); alert(numt); document.write(numt);
// console.log(numn); alert(numn); document.write(numn);
// console.log(thre); alert(thre); document.write(thre);
// console.log(pi); alert(pi); document.write(pi);
// console.log(numd); alert(numd); document.write(numd);
// console.log(nums); alert(nums); document.write(nums);
// console.log(isOld); alert(isOld); document.write(isOld);
// console.log(isAdm); alert(isAdm); document.write(isAdm);
// let person = {
//          firstName: 'Оксана',
//          middleName: 'Евгенiвна',
//          lastName: 'Олiйникова',
//          age: '39'
//      }
//         console.log(person);
//  document.write(`<h2>Вітаю ${person.firstName} ${person.middleName} тобі ${person.age}років</h2>`);
let a = 100;
let b = '100';
let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// 5 < 6 -> true
//   5 > 6 -> false
//   5 == 6 -> false
//   5 >= 6 -> false
//   10 == 10 -> true
//   10 === 10 -> true
//   10 < 10 -> false
//   10 != 10 -> false
//   10 !== 10 -> false
// 123 === '123' -> false
//   123 == '123' -> true
      
console.log(132 > 100 && 45 < 12);false
console.log(34 > 33 && 23 < 90 );true
console.log(99 > 100 && 45 > 12 );false
console.log(132 > 100 || 45 < 12 );true
console.log(111 > 11 || 45 < 111 );true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));true
console.log(!!'-1');true
console.log(!!-1);true
console.log(!!'0');true
console.log(!!'null');true
console.log(!!'undefined');true
console.log(!!(3/'owu'));false
console.log((111 > 11 || 45 < 111) ||  !!'0');true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12));false

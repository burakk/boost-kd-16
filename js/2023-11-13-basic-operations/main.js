let a = 1;
let b = 3;

let sum = a + b;

//string concatanation

let userFirstName = "Burak";
let userLastName = "Kuyucaklı";

let userName = userFirstName + " " + userLastName;

const Pi = 3.14;
const radius = 212;

/* string template literal  */
const circumferenceMsg = `Bu çemberin çevresi ${2 * Pi * radius}`;

console.log(circumferenceMsg);

let age1 = 15;
let age2 = 70;

const msg = "Yaşlar toplamı" + 15 + 70; //weakly typed ( coercion )

const msg2 = "Yaşlar toplamı " + (15 + 70);

let sumOfAges = age1 + age2;

console.log(msg, msg2);

let strNum1 = "1.24";
let strNum2 = "10";
let strNum3 = "10 deneme";

console.log(typeof strNum1, typeof strNum2);

let n1 = Number(strNum2);

console.log(typeof n1, n1);

let n2 = Number(strNum1);

console.log(typeof n2, n2);

let n3 = Number(strNum3);

console.log(typeof n3, n3);

let n4 = parseInt(strNum3);

console.log(typeof n4, n4);

console.log(parseFloat(strNum1));

/* % */

const remainder = 12 % 6;

console.log(remainder);

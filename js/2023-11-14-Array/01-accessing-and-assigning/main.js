const myArr = [1, 2, 3];

/*  accessing */
const firstEl = myArr[0];
const secondEl = myArr[1];
const thirdEl = myArr[2];



/* assigning */
myArr[0] = "a";

myArr[3] = "x";

myArr[5] = "z";

console.log( myArr, myArr[4] );



/* ---  Array destructuring ---   */

const food = [ "apple", "orange", "lemon" ];

const [ a, b, c, d ] = food;

console.log(a, b, c , d);


// --- default values
const colors = ["pink", "red",];

const [color1, color2, color3="aqua"] = colors;

console.log(color3);

// --- skip values
const letters = ["d", "f", "m"];

const [l1, ,l3] = letters;

console.log(l3);


// --- rest operator
const nums = [24, 35, 46, 312, 1000, 2434];

const [n1, n2, ...rest] = nums;

console.log( n1, n2, rest);




function test(){
    return ["a", ()=>{} ];
}


const [letter, setLetter] = test();

console.log( letter, setLetter );




let x = 0;
let y = 1;

// swap values using destructuring
[x, y] = [y, x];



/* --- *** assignment *** --- */
//spread operator (...)
const days = ["Monday", "Tuesday", "Wednesday"];

const daysComplete = [ ...days, "Thursday", "Friday"  ];


const favoriteNums1 = [1, 2, 3];
const favoriteNums2 = [3,4,5];
const favoriteNums3 = [  34, ...favoriteNums2, 41, ...favoriteNums1,  ];

console.log( favoriteNums3 );


// copying array via spread
const oldDays = [ 12, 5, 8];

const copyOldDays = [ ...oldDays ];

















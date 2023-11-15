//length
const myStr = "ABCDEFG";

const strLength = myStr.length;

const firstLetter = myStr[0];


myStr[0] = "x";  //primitive types are immutable


strLength;


/* string başındaki ve sonundaki whitespace'leri silecek */

const incomingStr = "    Deneme deneme     ";

const trimmedStr = incomingStr.trim();

console.log("test " + incomingStr );


/*  toLowerCase()  ve toUpperCase()   */
const usersAnswer = "AnKara";

const allLowerAnswer = usersAnswer.toLowerCase();

const allUpperAnswer = usersAnswer.toUpperCase();

console.log( allLowerAnswer, allUpperAnswer );



/* split  (string to array)  */
const favoriteBooksStr = "Knulp, siddhartha, demian ";
const favoriteBooksArr = favoriteBooksStr.split(", ");



console.log(favoriteBooksArr)




/* slice method  (start index 0 & end index -1) */

const city = "Ankara";

const slice1 = city.slice(0, 3); 

const slice2 = city.slice(2);

const slice3 = city.slice(-3); 

const slice4 = city.slice(-4, -1);

console.log(slice1, slice2, slice3, slice4);



/* replace */
const usersMessage = "Kötü söz, test, test, denem, Kötü söz";

const cleanedMessage = usersMessage.replace("Kötü söz", "****");

console.log(cleanedMessage);

/* replaceAll */
const totallyCleanedMessage = usersMessage.replaceAll("Kötü söz", "****");

console.log(  totallyCleanedMessage );

// regexp  *** 

/* includes */
const myStr2 = "Anakara'ya doğru yola çıkmışlar...";

console.log(   myStr2.includes("yola") );


/* indexOf */
console.log(  myStr2.indexOf("yola"), myStr2.indexOf("istanbul"));

/* lastIndexOf */
const myStr3 = "defter, kalem, defter, kitap";

console.log( myStr3.lastIndexOf("defter") );




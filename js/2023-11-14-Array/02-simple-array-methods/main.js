
/* push  dizinin sonuna elemanlar ekler, orijinal diziyi mutasyona uğratacaktır. Dizinin yeni uzunluğunu döndürür */
const arr1 = [1,2,3,4,5,6];
console.log( arr1.push(34) );

console.log(arr1);


/* pop */
const arr2 = ["a", "b", "c", "d"];
const popRetVal = arr2.pop();
console.log( popRetVal, arr2);

/* shift */
const arr3 = ["a1", "b2", "c3"];
const shiftRetVal = arr3.shift();
console.log(arr3, shiftRetVal);

/* unshift */
const arr4 = ["aa", "bb", "cc"];
const unshiftRetVal = arr4.unshift("00", "xx");
console.log(arr3, unshiftRetVal);


/* concat  mutasyon oluşturmaz */
const arr5 = ["g", "f", "n", "i"];
const concatRetVal = arr5.concat(["1", 3,5]);



console.log( arr5, concatRetVal, "***" );

/* includes */
const arr6 = [">", "-", "."];
const hasDot = arr6.includes(".");
if( hasDot ){ console.log( "'.' found") };

/* indexOf */
const arr7 = ["istanbul", "ankara", "konya", "bitlis", "ankara"];
const foundIndex = arr7.indexOf("niğde");
if( foundIndex == -1 ){ console.log("city not found")};
console.log( foundIndex);
/* lastIndexOf */
const lastIndexOf = arr7.lastIndexOf("ankara");


/* reverse */
const arr8 = ["test", "deneme", "y"];
const reversed = arr8.reverse();

console.log( arr8, reversed );

/* join  diziyi string'e çevir */
const months = ["ocak", "şubat", "mart"];

const newMessage = months.join("-") + " ,bu aylar güzel aylar";

console.log( newMessage);


/* slice */
const myCakeSlices = ["limonlu", "portakallı", "çikolatalı", "böğürtlen", "frambuaz"];

const slice1 = myCakeSlices.slice(0, 3);

console.log( myCakeSlices );


/* splice */
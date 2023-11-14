/* anoymous arrow function */

const doubleTheValue = (value) => {
  return value * 2;
};

doubleTheValue(34);

/* eğer function bloğu içinde sadece return statement varsa süslü parantez kullanmayabilirsin */
const doubleTheValue2 = value=>value*2;

doubleTheValue2(35);


const testFunc = (a, b, c) => {
  let d = b + c;
  return a + b + c + d;
};









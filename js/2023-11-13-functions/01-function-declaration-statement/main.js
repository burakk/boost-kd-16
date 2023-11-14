// function declaration statement kullanarak function oluşturmak
function sayHi() {
  // code block
  //statement1;
  //statement2;
  //implicit return undefined
}

//invoking ( calling ) a function
sayHi();

console.log(sayHi());

/* parameter a, parameter b */
function addNums(a, b) {
  return a + b; //explicit return;
}


/* argument 3, argument 5 */
console.log(addNums(3, 5));


/* default params */
function testing( x=45, y=64){

    return x * y;

}


console.log( testing(64, 13) );

console.log( testing(64) );

console.log( testing() );


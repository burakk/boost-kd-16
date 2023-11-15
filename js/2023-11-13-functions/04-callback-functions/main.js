/* Bir fonksiyona argüman olarak geçirilen ve geçirildiği fonksiyon tarafından çağrılan fonksiyonlara callback function diyelim  */

function test(callback){
  
  //statement 1
  //statement 2
  //statement 3
  callback();
  

}


function test2(){

}


test( test2  );



function emergency(callPhone){
  //statement1;
  //statement2;
  console.log( "Arama öncesi yapılacak iş 1 ");
  console.log( "Arama öncesi yapılacak iş 2 ");
  callPhone();

}


function call112(){  console.log("112 aranıyor");}

function call911(){console.log("911 aranıyor");}



emergency( call112 );

emergency( call911 );


// handler callback anonymous function 
setTimeout( ()=>{ console.log("hello from the future")}, 1000  );



//handler callback anonymous function expression
setInterval( function(){console.log("I am from the interval")}, 10000 );



document.querySelector("button").addEventListener("click", ()=>{  console.log("testing") })





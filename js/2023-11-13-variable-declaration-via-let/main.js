/*
let total = 50;

// can not be redeclared with the same identifier name 

let total = 70;

*/



/* 

variables declared via "let" are block scoped

*/


{

    let alias = "Frightened";
 var userId = 145;

}


//console.log(userId, alias);



/* initialize ( değer vererek ) başlatma zorunluluğu yok */
let myFavorites;

console.log( myFavorites )




/* 
Let değişkenleri bir kez initialize edildikten sonra tekrar değer ataması (assignment ) yapabilirsiniz.
*/

let basketTotal = 1304;

basketTotal += 400;
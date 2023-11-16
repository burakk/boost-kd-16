//json string
const jsonStr = '{"name":"John", "age":30, "car":null}';

console.log(typeof jsonStr);

const jsObj = JSON.parse(jsonStr);

console.log(jsObj.name, "*****");



const formDataObj = {
    userName:"Burak",
    userMsg:"Lorem lorem",
}


const formDataJsonStr = JSON.stringify( formDataObj );

console.log( typeof formDataJsonStr );


//mock api 

//https://mockapi/api/v3/burak/products    -> 
//https://mockapi/api/v3/burak/products/5 ->

//



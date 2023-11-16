const isRainy = true;

//pending, fullfillment, jejection
// Promise objesi bir executor function ile çalışır 
const iWillBeThereInAnHour = new Promise( (resolve, reject)=>{
      if(!isRainy){
        resolve("Hep dakik...");
      }
      reject("Trafik vardı...");
} );   




iWillBeThereInAnHour
.then(  (msg)=>{  console.log( msg)  }    )
.catch(  (errMsg)=>{  console.log( errMsg )  } )




function getAllProducts(){

  return new Promise(  (resolve, reject)=>{

    setTimeout(  ()=>{
      //reject("Server Error");
      resolve(  [{id:0, title:"x"}, {id:1, title:"y"}]  )
    }, 10000  );

  }   )

}


getAllProducts()
.then( (data)=>{ console.log(data)} )
.catch( (msg)=>{ console.log(msg) })



//server request  ->  //https://api.test.com/products 


console.log("hello ***");

setTimeout( ()=>{console.log("I am from setTimeout ****")})

new Promise( (resolve, reject)=> { resolve("I am from promise ***")}  )
.then( (msg)=>{ console.log( msg )} );

console.log("bye ***");



//get all answers and all questions  fetch().then().cactch()

//2 soruluk bir test 

//her soru için 30 

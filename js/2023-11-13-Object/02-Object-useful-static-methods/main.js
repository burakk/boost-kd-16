const myObj = { a: 1, b: 2 };

/* entries  */

console.log(Object.entries(myObj));
//[ ["a", 1], ["b", 2], ]

/* keys */

const keysOfMyObjAsArray = Object.keys(myObj);

console.log(keysOfMyObjAsArray);

/* values */

const valuesOfMyObjAsArray = Object.values(myObj);


console.log(valuesOfMyObjAsArray);



const DATA = [
    {id:0 , inStock:false, color:"red" },
    {id:0 , color:"red", category:"laptop" }
]


// [ id, inStock, color, category ]



// foreach, for, Object.keys(myObj)

DATA.forEach
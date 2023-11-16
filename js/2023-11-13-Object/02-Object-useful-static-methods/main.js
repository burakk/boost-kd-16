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

// [ id, inStock, color, category ]

// foreach, for, Object.keys(myObj)

DATA.forEach((item, index, arr) => {});

const DATA = [
  { id: 12, color: "red", size: "lg" },
  { id: 14, color: "blue", size: "sm", inStock: false },
];

//[id, color, size, inStock]

/*
  const distincKeys = [];
  
  DATA.forEach((item) => {
    Object.keys(item).forEach((key) => {
  
      if(!distincKeys.includes(key)){
          distincKeys.push(key);
      }
      
    });
  });
  
  */

function getDistinctKeys(data) {
  const distincKeys = [];

  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (!distincKeys.includes(key)) {
        distincKeys.push(key);
      }
    });
  });

  return distincKeys;
}

console.log(getDistinctKeys(DATA));

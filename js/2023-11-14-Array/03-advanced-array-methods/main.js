const DATA_USERS = ["Jeff", "John", "Dave", "Ricky", "Burak"];
const DATA_PRODUCTS = [
  { id: 0, title: "Hp x5 laptop", color: "red", price: 56000 },
  { id: 1, title: "Lenove x5 laptop", color: "silver gray", price: 56000 },
  { id: 2, title: "Dell x5 laptop", color: "silver gray", price: 56000 },
  { id: 3, title: "Dell x5 laptop", color: "black", price: 56000 },
  { id: 4, title: "Hp x8 laptop", color: "silver gray", price: 56000 },
];

/* foreach */
DATA_USERS.forEach((item, index, arr) => {}); /* first iteration:
item:  "Jeff"
index: 0
arr : üzeirinde çalışılan array [ "Jeff", "John", "Dave", "Ricky"]
*/

//Declarative
DATA_USERS.forEach(test);

function test(user, index, arr) {
  console.log(user, index, arr);
}

//Imperative
for (let i = 0; i < DATA_USERS.length; i++) {
  console.log(DATA_USERS[i], i, DATA_USERS);
}

DATA_USERS.forEach(function (user, index, arr) {});

/* filter  []*/
//[ "Jeff", "John", "Dave", "Ricky"]
const filteredUsers = DATA_USERS.filter((userName, index, arr) => {
  return true;
});

console.log(filteredUsers);

const filteredUsers2 = DATA_USERS.filter((userName, index, arr) => {
  if (userName.length > 4) {
    return true;
  }
  return false;
});

console.log(filteredUsers2);

// *** - Örnek 1: silver gray renkli ürünleri bir diziye toplayacağız. Bunu yaparken filter metodu kullanacağız.

["a", "b", "c"].filter((item, index, arr) => {});

[1, 2, 3, 4].filter((num, index, arr) => {});

//[ {x:1, y:2} ]
[
  { x: 1, y: 2 },
  { x: 40, y: 50 },
].filter((item, index, arr) => {
  return true;
});

const filteredProducs = DATA_PRODUCTS.filter((product, index, arr) => {
  if (product.color === "silver gray") {
    return true;
  }

  return false;
});

console.log(filteredProducs);

// *** - Örnek 2: sadece çift sayıları yeni bir diziye toplayacağız. Dizinin filter metodunu kullanalım.

const nums = [12, 45, 65, 74, 68];

const evenNums = nums.filter((num, index, arr) => {
  if (num % 2 == 0) {
    return true;
  }
  return false;
});

const evenNums2 = nums.filter((num) => num % 2 == 0); //callback arrow function  ( kısa yazılış )

console.log(evenNums2);

/* map */
const mapped = [1, 2, 3].map((item, index, arr) => {
  return item * 2;
});

console.log(mapped);

const ids = [123, 245, 411, 564]; //[ "u123", "u245", "u411", "u564" ]  map function'da callback olarak named function kullanınız...

//const mappedIds = ids.map( (item, index, arr)=>{  return "u" + item  } );

const mappedIds = ids.map(mapUserIds);

function mapUserIds(item, index, arr) {
  return "u" + item;
}

console.log(mappedIds);

// ["<li>pirinç</li>", "<p>su</p>", "<p>şehriye</p>"] map metodu kullanmalıyım, anonymous function expression callback
const ingredients = [
  { htmlEl: "li", content: "pirinç" },
  { htmlEl: "p", content: "su" },
  { htmlEl: "p", content: "şehriye" },
];

const htmlStringsArr = ingredients.map(function (item, index, arr) {
  // { htmlEl: "li", content: "pirinç" }
  const htmlEl = item.htmlEl; //li
  const textContent = item.content; //pirinç
  const htmlStr = `<${htmlEl}>${textContent}</${htmlEl}> `;
  return htmlStr; //<li>pirinç</li>
});

console.log(htmlStringsArr);

/* reduce */
const myNums = [1, 14, 15];

myNums.reduce((prevItem, item, index, arr) => {
  console.log(prevItem, item);
});

myNums.reduce((prevItem, item, index, arr) => {
  console.log(prevItem, item);
}, 0);

//reduce  ile nums dizisindeki sayıların toplamını döndürmek istiyorum
//[1,14,15]
const sum = myNums.reduce((prev, item, index, arr) => {
  //prev 1 //birinci iterasyon
  // item 14 //birinci iterasyon

  //prev 15
  // item 15

  return prev + item; //15 birincici iterasyon
});

console.log(sum);

const basket = [12000, 230, 245];
const loan = 18000;

const totalPayment = basket.reduce((prev, item, index, arr) => {
  return prev + item;
}, 18000);

console.log(totalPayment);

const basketNew = [
  { id: 0, title: "laptop", price: 50000 },
  { id: 24, title: "mouse", price: 3000 },
  { id: 30, title: "keyboard", price: 2000 },
  { id: 50, title: "cable", price: 500 },
];

//incorrect result
const basketNewTotal = basketNew.reduce((prev, item) => {
  //prev  {id:0, title:"laptop", price:50000}
  //item {id:24, title:"mouse", price:3000}

  //prev 53000
  //item {id:30, title:"keyboard", price:2000}

  return prev.price + item.price; // 53000
});

//correct result
const basketNewTotalCorrect = basketNew.reduce((prev, item) => {
  /* 1.iteration */
  //prev  0
  //item {id:0, title:"laptop", price:50000}

  /* 2.iteration */
  //prev 50000
  //item {id:24, title:"mouse", price:3000}

  /* 3.iteration */
  //53000
  // {id:30, title:"keyboard", price:2000}

  return prev + item.price; // 50000 //53000 //55000
}, 0);

/*  *** sort  **** */
const numsArr = [1, 102, 11, 15, 105];

const sorted = numsArr.sort();

console.log(numsArr, sorted, "++++");

const numsArr2 = [1, 103, 11, 15, 108];

const sorted2 = numsArr2.sort((a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
});

console.log(sorted2);

const DATA_STUDENT_SCORES = [
  { sId: 0, name: "s1", score: 76 },
  { sId: 0, name: "s2", score: 82 },
  { sId: 0, name: "s3", score: 55 },
];

//copy the data
//use spread
const studentDatas = [...DATA_STUDENT_SCORES];
const studentDatas2 = DATA_STUDENT_SCORES.slice();

studentDatas.sort(sortStudents);

function sortStudents(a, b) {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }

  return 0;
}

console.log(studentDatas);

/* find */
const boostStudents = [
  { id: 20, name: "bS1", score: 100 },
  { id: 18, name: "bS3", score: 85 },
  { id: 20, name: "bS10", score: 100 },
  { id: 200, name: "bS4", score: 52 },
  { id: 20, name: "bS5", score: 99 },
];

const willBeHonoredBoostStudent = boostStudents.find(findThePerfectOne);

function findThePerfectOne(student) {
  return student.score == 100;
}

console.log(willBeHonoredBoostStudent);

/* findIndex */

/* every */

/* some */

//hafızada yeni bir p elemanı oluştur
//p elemaının text içeriğini merhab dünya yap
//p elemanını body'nin son çocuğu olarak ekle

const pEl = document.createElement("p");
pEl.textContent = "Merhaba Dünya";
document.body.append(pEl);

//dökümana 100 adet, 40*40 ebatlarında 1px siyah border'lı div ile yapılmış kutular ekleyiniz...

/* 

1-

for (let i = 0; i < 100; i++) {
  const boxEl = document.createElement("div");
  boxEl.style.width = "40px";
  boxEl.style.height = "40px";
  boxEl.style.border = "1px solid black";
  document.body.append(boxEl);

}
*/

/*
2- 
for(let i = 0; i< 100; i++){
    const boxEl = document.createElement("div");
    boxEl.classList.add("box");
    document.body.append(boxEl);
}
*/

for (let i = 0; i < 100; i++) {
  //createMyBox();
}

function createMyBox() {
  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  document.body.append(boxEl);
}

// saniyede bir dökümana yeni kutular ekleyebilir miyiz?

// function(){},  ()=>{}

/*
setInterval(  function(){  console.log("1000 ms sonra...") }, 1000 );

*/

setInterval(() => {
  console.log("1000 ms sonra...");
}, 1000);

setInterval(funcX, 1000);

function funcX() {
  console.log("1sn geçti");
}

setInterval(() => {
  console.log("1000 ms sonra...");
}, 1000);

//setInterval(  createMyBox, 1000 );

//bir renk listesi oluştur ["red", "orange", "blue", "pink", "gray"];
//her kutunun renk listesinden rastgele bir renkle gösterilmesini sağla

const colorsArr = ["red", "orange", "blue", "pink", "gray"];

//setInterval( createColoredBox, 500  );

function createColoredBox() {
  const randomColorIndex = Math.floor(Math.random() * colorsArr.length);
  const randomColor = colorsArr[randomColorIndex];

  const boxEl = document.createElement("div");
  boxEl.classList.add("box");
  boxEl.style.backgroundColor = randomColor;
   document.body.append(boxEl);
}










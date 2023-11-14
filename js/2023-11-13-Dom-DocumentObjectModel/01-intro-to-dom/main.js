//yeni bir p elamanı oluştur
//text içeriğini deneme yap
//dokümanın body adlı elemanına ekle ve tarayıcıda göster

//dökümanda id'si root olan elamanı çağır
//bu elmanın stil özelliklerinden rengini kırmızı yap

//dökümanda id'si the-btn olan elamana bir olay dinleyicisi ekle
//kullanıcı bu elmanı tıkladığında merhab kullanıcı mesajı ve

const theDivEl = document.getElementById("the-div");
/*
document.getElementsByTagName
document.querySelector
document.querySelectorAll
*/

theDivEl.style.fontSize = "0.6rem";
theDivEl.textContent = "Hello from js";

const pEls = document.querySelectorAll("p.basic");

console.log(typeof pEls, pEls);

const pEl = document.querySelector("p.basic");

console.log(typeof pEl, pEl);

/* Traversing */
const parentOfPel = pEl.parentElement;

console.log(parentOfPel);

/* getting attribute values */
console.log(pEl.getAttribute("class"));

pEl.setAttribute("class", "hi there");

/*  gettting data attributes value */
console.log(pEl.dataset.productId); //camelCase standard

console.log(pEl.dataset.sliderIndex);

/* using classList */
pEl.classList.add("test");

pEl.classList.remove("test");

pEl.classList.toggle("test");

//buttonları bir liste orak seç

/*
const btnEls = document.querySelectorAll("nav button");


for( let i =0; i<btnEls.length; i++){
  btnEls[i].addEventListener('click', (e)=>{
    alert(e.target.dataset.btnIndex);
  })
}
console.log(btnEls.length)
*/

// Event delegation

const navEl = document.getElementById("the-nav");

navEl.addEventListener("click", handleClick);

function handleClick(e) {
  const btnIndex = e.target.dataset.btnIndex;

  console.log(btnIndex);
}

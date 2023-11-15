//1- Birinci ya da ikinci buton tıklandığında bir index almalıyım

// 0 * index

// 1 * -100%

// 2 * -100%

//2-

//3-



// carousel nav element'ini al
const carouselNavEl = document.querySelector(".carousel > nav");

const carouselContentContainerEl = document.querySelector(".carousel > .content-container");


//carousel nav element'ine olay dinleyicisi ekle (olayı çocuklara delege et)
carouselNavEl.addEventListener("click", handleCarouselMove);



function handleCarouselMove(e) {
  const target = e.target;
  const btnIndex = target.dataset.index;
  
  //const testing = btnIndex * -100 + "%";

  const moveTo = parseInt(btnIndex) * -100;
  carouselContentContainerEl.style.marginLeft = `${moveTo}%`;
  
}

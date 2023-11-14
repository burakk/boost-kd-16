//1- Birinci ya da ikinci buton tıklandığında bir index almalıyım

// 0 * index

// 1 * -100%

// 2 * -100%

//2-

//3-

const carouselNavEl = document.querySelector(".carousel > nav");

carouselNavEl.addEventListener("click", handleCarouselMove);

function handleCarouselMove(e) {
  alert(e.target.dataset.index);
}

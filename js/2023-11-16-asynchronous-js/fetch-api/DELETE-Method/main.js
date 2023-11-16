const API_URL_BASE = "https://638a06e04eccb986e8a1804b.mockapi.io/";

const frmDeleteEl = document.getElementById("frmDeleteArticle");

const inpWillBeDeletedIdEl = document.getElementById("willBeDeletedId");

frmDeleteEl.addEventListener("submit", handleFrmDelete);

function handleFrmDelete(e) {
  e.preventDefault();
  console.log(inpWillBeDeletedIdEl);
  alert(inpWillBeDeletedIdEl.value);

  fetch("https://638a06e04eccb986e8a1804b.mockapi.io/articles/12",   { method:"POST" }    )



}

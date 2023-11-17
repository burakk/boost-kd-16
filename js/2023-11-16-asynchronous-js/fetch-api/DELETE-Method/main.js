const API_URL_BASE = "https://638a06e04eccb986e8a1804b.mockapi.io/";

//get form element
const frmEl = document.getElementById("frmDeleteArticle");

//get input element
const inpEl = document.getElementById("willBeDeletedId");

frmEl.addEventListener("submit", handleFrmDelete);

function handleFrmDelete(e) {
  e.preventDefault();

  const id = inpEl.value;

  fetch("https://638a06e04eccb986e8a1804b.mockapi.io/articles/" + id, {
    method: "DELETE",
  })
  .then( (response)=>{  console.log(response)  } )
  .catch( (err)=>{ console.log(err)} );
}

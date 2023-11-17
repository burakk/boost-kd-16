const API_URL_BASE = "https://638a06e04eccb986e8a1804b.mockapi.io/";

//get form element
const frmEl = document.getElementById("frmAdd");

//get input element
const inpTitleEl = document.getElementById("title");

//get article body text-area
const bodyTextEl = document.getElementById("bodyText");

frmEl.addEventListener("submit", handleFrmAdd);

function handleFrmAdd(e) {
  e.preventDefault();

  const title = inpTitleEl.value;
  const content = bodyTextEl.value;

  const frmDtataObj = {
    title,
    content,
  };

  addArticle(frmDtataObj);
}

function addArticle(frmDataObj) {
  const frmDataJsonStr = JSON.stringify(frmDataObj);
  const fetchOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: frmDataJsonStr,
  };

  fetch(`${API_URL_BASE}articles`, fetchOptions)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

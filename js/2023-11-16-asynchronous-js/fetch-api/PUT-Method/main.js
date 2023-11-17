const API_URL_BASE = "https://638a06e04eccb986e8a1804b.mockapi.io/";

//get form element
const frmEl = document.getElementById("frmUpdate");

//get input element
const inpTitleEl = document.getElementById("title");

//get article body text-area
const bodyTextEl = document.getElementById("bodyText");

//get article id element
const inpArticleIdEl = document.getElementById("articleId");

frmEl.addEventListener("submit", handleFrmUpdate);

function handleFrmUpdate(e) {
  e.preventDefault();

  const articleId = inpArticleIdEl.value;
  const title = inpTitleEl.value;
  const content = bodyTextEl.value;

  const frmDtataObj = {
    articleId,
    title,
    content,
  };

  addArticle(frmDtataObj);
}

function addArticle(frmDataObj) {
  const frmDataJsonStr = JSON.stringify(frmDataObj);
  const fetchOptions = {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: frmDataJsonStr,
  };

  
  
  fetch(`${API_URL_BASE}articles/${frmDataObj.articleId}`, fetchOptions)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
    
}

const API_URL_BASE = "https://638a06e04eccb986e8a1804b.mockapi.io/";

const alreadyFetched = {};

const btnEl = document.querySelector("button");
const articleListEl = document.querySelector(".article-list");

btnEl.addEventListener("click", handleBtnGetArticlesClick);

function handleBtnGetArticlesClick(e) {
  getArticles(API_URL_BASE + "articles");
}

function getArticles(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return new Error("A problem");
    })

    .then((data) => {
      createListEls(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createListEls(data) {
  data.forEach((article) => {
    const liEl = document.createElement("li");
    liEl.textContent = `id:${article.id} - title: ${article.title} - content: ${article.content}`;
    const btnDeleteEl = document.createElement("button");
    btnDeleteEl.textContent = "Sil";
    liEl.append(btnDeleteEl);
    articleListEl.append(liEl);

    liEl.addEventListener("click", (e) => {
      alert(article.content);
    });
  });
}

const theLinkEl = document.querySelector("a");

theLinkEl.addEventListener("click", handleClick);

function handleClick(e) {
  //link elemanının varsayılı davranışını engelle
  e.preventDefault();

  //gelen olay bilgisi objesi içinden olayı tetikleyen elemana ulaş
  const target = e.target;

  //elemanın href özellik değerini al
  const targetUrl = target.getAttribute("href");

  console.log(targetUrl);
}

const formEl = document.getElementById("frm-register");

console.log(formEl);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
}

function handleLogin(e) {
  e.preventDefault();
  alert("Submitting");
}

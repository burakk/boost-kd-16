// setTimeout()
console.log("Hello");
const timeoutId = setTimeout(timeIsUp, 18000);

function timeIsUp() {
  console.log("Time is up...");
}

clearTimeout(timeoutId);

console.log("Bye!!!");

/* örnek */
function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  f2();
}

main();

//main, f1, f2;

//main, f2, f1;

// setInterval()

//EventListeners

document.addEventListener("click", handleClick);

function handleClick(e) {
  console.log("clicked");
}

//fetch()

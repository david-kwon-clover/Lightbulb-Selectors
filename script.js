// Write your code here
console.log("Script connected");

const lightBulb1 = document.querySelector("#lightbulb1");
const lightBulb2 = document.querySelector("#lightbulb2");
const lightBulb3 = document.querySelector("#lightbulb3");

const clickCountSubtitle = document.querySelector(".subtitle");

let count = 0;

lightBulb1.addEventListener("click", function () {
  count++;
  count === 1
    ? (clickCountSubtitle.innerHTML = `You've clicked the lights ${count} time`)
    : (clickCountSubtitle.innerHTML = `You've clicked the lights ${count} times`);
  this.classList.toggle("active");
});
lightBulb2.addEventListener("click", function () {
  count++;
  count === 1
    ? (clickCountSubtitle.innerHTML = `You've clicked the lights ${count} time`)
    : (clickCountSubtitle.innerHTML = `You've clicked the lights ${count} times`);
  this.classList.toggle("active");
});
lightBulb3.addEventListener("click", function () {
  count++;
  count === 1
    ? (clickCountSubtitle.innerHTML = `You've clicked the lights ${count} time`)
    : (clickCountSubtitle.innerHTML = `You've clicked the lights ${count} times`);
  this.classList.toggle("active");
});

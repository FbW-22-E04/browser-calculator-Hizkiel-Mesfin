// Selecting elements

const plus = document.querySelectorAll(".plus");
const resultPlus = document.querySelector(".result-plus");

const minus = document.querySelectorAll(".minus");
const resultminus = document.querySelector(".result-minus");

const times = document.querySelectorAll(".times");
const resultTimes = document.querySelector(".result-times");

const divide = document.querySelectorAll(".divide");
const resultDivide = document.querySelector(".result-divide");

const modulo = document.querySelectorAll(".modulo");
const resultModulo = document.querySelector(".result-modulo");

plus.forEach((el) => {
  el.addEventListener("input", (e) => {
    resultPlus.innerText = +[...plus][0].value + +[...plus][1].value;
  });
});

minus.forEach((el) => {
  el.addEventListener("input", (e) => {
    resultminus.innerText = +[...minus][0].value - +[...minus][1].value;
  });
});

times.forEach((el) => {
  el.addEventListener("input", (e) => {
    resultTimes.innerText = +[...times][0].value * +[...times][1].value;
  });
});

divide.forEach((el) => {
  el.addEventListener("input", (e) => {
    resultDivide.innerText = +[...divide][0].value / +[...divide][1].value;
  });
});

modulo.forEach((el) => {
  el.addEventListener("input", (e) => {
    resultModulo.innerText = +[...modulo][0].value % +[...modulo][1].value;
  });
});

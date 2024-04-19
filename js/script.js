const increaseEL = document.querySelector(".increase");
const decreaseEl = document.querySelector(".decrease");
const resetEl = document.querySelector(".reset");
const counterEl = document.querySelector(".counter");

let count = 0;
increaseEL.addEventListener("click", () => {
  count = count + 1;
  console.log(count);
  counterEl.innerHTML = count;
  if (count > 0) {
    counterEl.style.color = "green";
    console.log(count)
  }
});

decreaseEl.addEventListener("click", () => {
  count = count - 1;
  console.log(count);
  counterEl.innerHTML = count;
  if (count < 0) {
    counterEl.style.color = "red"
  }
});

resetEl.addEventListener("click", () => {
  count = 0;
  counterEl.innerHTML = count;
  if (count === 0) {
    counterEl.style.color = "#000"
  }
});



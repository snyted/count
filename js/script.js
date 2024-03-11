const increaseEL = document.querySelector(".increase");
const decreaseEl = document.querySelector(".decrease");
const resetEl = document.querySelector(".reset");
const counterEl = document.querySelector(".counter");

function changingCount() {
  let count = 0;
  increaseEL.addEventListener("click", () => {
    do {
      count = count + 1;
      counterEl.innerText = count;
      if (count > 0) {
        counterEl.style.color = "#5FF645";
      }
    } while ("click" == true);
  });

  decreaseEl.addEventListener("click", () => {
    do {
      count = count - 1;
      counterEl.innerText = count;
      if (count < 0) {
        counterEl.style.color = "#F72C25";
      }
    } while ("click" == true);
  });

  resetEl.addEventListener("click", () => {
    count = 0;
    counterEl.innerText = count;
    console.log(count);
    if(count === 0) {
        counterEl.style.color = "#1F1A38"
    }
  });
}
changingCount();

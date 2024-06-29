const arr = [1, 2, 3, 4];

function sumArr(arr) {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  return sum;
}
const result = sumArr(arr);
console.log(result);

const buttonUp = document.getElementById("button up");
const span = document.getElementById("span");
const buttonDown = document.getElementById("button down");

let count = 0;

buttonUp.addEventListener("click", function () {
  count++;
  span.textContent = count;
});
buttonDown.addEventListener("click", function () {
  count--;
  span.textContent = count;
});

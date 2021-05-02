const leftInput = document.querySelector(".left-color-input");
const rightInput = document.querySelector(".right-color-input");
const body = document.querySelector("body");
const cssOutput = document.querySelector(".css-output");

// gettting colors
let leftColor = leftInput.value;
let rightColor = rightInput.value;

// defining functions
const changeBackground = () => {
  const cssString = `linear-gradient(to right, ${leftColor}, ${rightColor})`;

  body.style.background = cssString;
  cssOutput.textContent = `background: ${cssString};`;
};

leftInput.addEventListener("change", (event) => {
  leftColor = event.target.value;
  changeBackground();
});

rightInput.addEventListener("change", (event) => {
  rightColor = event.target.value;
  changeBackground();
});

changeBackground();

const button = document.querySelector("button");

const randomColour = () => {
  const values = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor((Math.random() * 100) % 16);
    color += values[randomIndex];
  }
  return color;
};

button.addEventListener("click", () => {
  leftColor = randomColour();
  rightColor = randomColour();

  leftInput.value = leftColor;
  rightInput.value = rightColor;
  changeBackground();
});
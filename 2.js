const passwordInput = document.getElementById("passwordInput");
const lengthItem = document.getElementById("length");
const upperItem = document.getElementById("upper");
const lowerItem = document.getElementById("lower");
const numberItem = document.getElementById("number");
const symbolItem = document.getElementById("symbol");
const slider = document.getElementById("slider");
const genButton = document.getElementById("genButton");
const genOutput = document.getElementById("genOutput");

passwordInput.addEventListener("input", () => {
  const v = passwordInput.value;

  lengthItem.style.color = v.length >= 8 ? "green" : "gray";
  upperItem.style.color = /[A-Z]/.test(v) ? "green" : "gray";
  lowerItem.style.color = /[a-z]/.test(v) ? "green" : "gray";
  numberItem.style.color = /\d/.test(v) ? "green" : "gray";
  symbolItem.style.color = /[^A-Za-z0-9]/.test(v) ? "green" : "gray";
});


genButton.addEventListener("click", () => {
  const length = slider.value;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  genOutput.textContent = result;
});
let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let displayValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      displayValue = "";
      display.textContent = "0";
    } else if (value === "=") {
      try {
        displayValue = displayValue.replace(/×/g, "*").replace(/÷/g, "/");
        displayValue = eval(displayValue).toString();
        display.textContent = displayValue;
      } catch (e) {
        display.textContent = "Error";
      }
    } else if (value === "⌫") {
      displayValue = displayValue.slice(0, -1);
      display.textContent = displayValue || "0";
    } else {
      displayValue += value;
      display.textContent = displayValue;
    }
  });
});

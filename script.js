let display = document.getElementById("display");

function appendSymbol(symbol) {
  if (display.value === "0") display.value = "";
  if (symbol === '()') {
    display.value += '(';
  } else if (symbol === '^') {
    display.value += '**';
  } else {
    display.value += symbol;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  if (display.value.length > 1)
    display.value = display.value.slice(0, -1);
  else
    display.value = "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function factorial() {
  try {
    let n = parseInt(eval(display.value));
    if (n < 0) {
      display.value = "Error";
      return;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

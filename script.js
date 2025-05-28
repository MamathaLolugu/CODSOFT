function appendValue(val) {
  const display = document.getElementById("display");
  if (display.value === "0") {
    display.value = val;
  } else {
    display.value += val;
  }
}

function calculate() {
  try {
    const display = document.getElementById("display");
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "0";
}

const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const resetButton = document.getElementById("resetButton");

celsiusInput.addEventListener("input", convertTemperatures);
resetButton.addEventListener("click", resetFields);

function convertTemperatures() {
  const celsiusValue = parseFloat(celsiusInput.value);
  
  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    const kelvinValue = celsiusValue + 273.15;

    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    kelvinInput.value = kelvinValue.toFixed(2);
  } else {
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
}

function resetFields() {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
}

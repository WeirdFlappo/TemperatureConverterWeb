// Get references to the input elements
const TEXTBOX = document.getElementById("textBox");
const TOFAREN = document.getElementById("toFaren");
const TOCELCIUS = document.getElementById("toCel");
const RESULT = document.getElementById("result");

function convert() {
    let temp = parseFloat(TEXTBOX.value); 

    if (TOFAREN.checked) {
        let result = (temp * 9/5) + 32;
        RESULT.textContent = `${temp}°C is ${result.toFixed(2)}°F`;
    } else if (TOCELCIUS.checked) {
        let result = (temp - 32) * 5/9;
        RESULT.textContent = `${temp}°F is ${result.toFixed(2)}°C`;
    } else {
        RESULT.textContent = "Select a unit";
    }
}

const inputField = document.querySelector("input");
const digitDisplay = document.getElementById("numDisplay");
const errorDisplay = document.getElementById("errorMessage");

let count = 0;

inputField.addEventListener("input", updateValue);

function updateValue(e) {
	if (count <= 10) {
		if (isNaN(e.target.value)) {
			errorDisplay.innerText = "enter a number";
		} else {
			errorDisplay.innerText = "";

			let digit = [
				e.target.value.slice(0, 3),
				".",
				e.target.value.slice(3, 6),
				".",
				e.target.value.slice(6),
			].join("");

			count++;

			digitDisplay.innerText = digit;
		}
	} else {
		errorDisplay.innerText = "You entered 10 digits already!";
		inputField.disabled = true;
	}
}

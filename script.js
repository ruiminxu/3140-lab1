const inputField = document.querySelector("input");
const digitDisplay = document.getElementById("numDisplay");
const errorDisplay = document.getElementById("errorMessage");
const resetButton = document.getElementById("reset");

inputField.addEventListener("input", updateValue);

function updateValue(e) {
	console.log(inputField.value.length);

	if (inputField.value.length != 11) {
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

			digitDisplay.innerText = digit;
		}
	} else {
		errorDisplay.innerText = "You entered 10 digits already!";
		inputField.disabled = true;
		resetButton.hidden = false;
	}
}

resetButton.addEventListener("click", reset);

function reset(e) {
	inputField.disabled = false;
	count = 0;
	digitDisplay.innerText = "";
	errorDisplay.innerText = "";
	resetButton.hidden = true;
	inputField.value = "";
}

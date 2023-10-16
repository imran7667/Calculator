let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function calculate() {
    try {
        const result = Function('"use strict";return (' + displayValue + ')')();
        document.getElementById("display").value = result;
        displayValue = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

// Event listeners for keyboard input
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (/[0-9+\-*/.]/.test(key)) {
        // Only allow numeric and basic operator keys
        appendToDisplay(key);
    } else if (key === "Enter") {
        // Calculate when Enter key is pressed
        calculate();
    } else if (key === "Escape") {
        // Clear the display when Escape key is pressed
        clearDisplay();
    }
});

// Prevent the default behavior of some keys (e.g., Arrow keys moving the cursor)
document.addEventListener("keydown", function (event) {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
        event.preventDefault();
    }
});

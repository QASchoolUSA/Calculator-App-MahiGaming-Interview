declare const math: any;

document.addEventListener('DOMContentLoaded', () => {
    if (typeof math === 'undefined') {
        console.error("Math.js not loaded");
        return;
    }

    const display = document.getElementById("display") as HTMLInputElement;
    const buttons = document.querySelectorAll(".btn");

    let currentInput = "";
    let expression = "";
    let resultDisplayed = false; // Track if the result was just displayed

    const MAX_VALUE = 9999.99;
    const MIN_VALUE = -9999.99;

    buttons.forEach(button => {
        button.addEventListener("click", () => handleButtonClick((button as HTMLButtonElement).dataset.value));
    });

    function handleButtonClick(value: string | undefined) {
        if (!value) return; // Exit if value is null or undefined

        switch (value) {
            case "=":
                if (currentInput || expression) {
                    expression += currentInput;
                    calculate();
                    resultDisplayed = true; // Set result displayed flag
                }
                break;
            case "C":
                clear();
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                handleOperator(value);
                break;
            case ".":
                handleDecimal();
                break;
            case "±":
                handleSignChange();
                break;
            default:
                handleNumber(value);
                break;
        }
    }

    function handleOperator(operator: string) {
        if (currentInput && !resultDisplayed) {
            expression += currentInput + operator;
            currentInput = "";
            // Show the first number when an operator is pressed
            updateDisplay(expression.slice(0, -1));
        } else if (resultDisplayed) {
            expression = display.value + operator;
            resultDisplayed = false; // Reset result displayed flag
        } else if (expression.slice(-1) !== operator) {
            expression = expression.slice(0, -1) + operator; // Replace the last operator
        } else {
            expression += operator;
        }
    }

    function handleDecimal() {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateDisplay(currentInput);
        }
    }

    function handleSignChange() {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) * -1).toString();
            updateDisplay(currentInput);
        }
    }

    function handleNumber(value: string) {
        if (resultDisplayed) {
            currentInput = value; // Start a new number
            resultDisplayed = false; // Reset result displayed flag
        } else {
            currentInput += value;
        }
        updateDisplay(currentInput);
    }

    function updateDisplay(value: string) {
        display.value = value || "0";
    }

    function calculate() {
        try {
            const result = math.evaluate(expression); // Use the global math object
            if (result > MAX_VALUE || result < MIN_VALUE) {
                throw new Error("Result out of range");
            }
            currentInput = truncate(result).toString();
            updateDisplay(currentInput);
            expression = currentInput; // Update expression to current result
        } catch (error) {
            display.value = (error as Error).message;
            resetState();
        }
    }

    function truncate(value: number): number {
        return Math.floor(value * 100) / 100;
    }

    function clear() {
        currentInput = "";
        expression = "";
        resultDisplayed = false; // Reset result displayed flag
        updateDisplay("");
    }

    function resetState() {
        currentInput = "";
        expression = "";
        resultDisplayed = false;
    }
});
// Initialize currentExpression
let currentExpression = "";

// Accessing the output field
const outputField = document.getElementById("output");

// Helper function to update the output display
function updateOutput() {
  outputField.value = currentExpression;
}

// Factorial helper function
function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) return undefined; // Negative numbers and non-integers don't have a factorial
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Button click handlers for numbers and operators
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent.trim();

    // Handle button inputs
    if (buttonText === "=") {
      try {
        // Replace symbols for multiplication, division, and exponentiation
        currentExpression = String(eval(currentExpression
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/\^/g, "**")));
        updateOutput();
      } catch (error) {
        currentExpression = "Invalid Expression";
        updateOutput();
      }
    } else if (buttonText === "π") {
      currentExpression += Math.PI;
      updateOutput();
    } else if (buttonText === "sqrt") {
      currentExpression = `Math.sqrt(${currentExpression})`;
      updateOutput();
    } else if (buttonText === "sq") {
      currentExpression += "**2";
      updateOutput();
    } else if (buttonText === "log") {
      currentExpression = `Math.log10(${currentExpression})`; // Base 10 log
      updateOutput();
    } else if (buttonText === "sin") {
      currentExpression = `Math.sin(${currentExpression})`;
      updateOutput();
    } else if (buttonText === "cos") {
      currentExpression = `Math.cos(${currentExpression})`;
      updateOutput();
    } else if (buttonText === "tan") {
      currentExpression = `Math.tan(${currentExpression})`;
      updateOutput();
    } else if (buttonText === "%") {
      try {
        const parts = currentExpression.split('%');
        if (parts.length === 2) {
          const firstNumber = parseFloat(parts[0]);
          const secondNumber = parseFloat(parts[1]);
          
          if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
            const result = firstNumber % secondNumber; // Modulus operation
            currentExpression = result.toString();
          } else {
            currentExpression = "Invalid Expression";
          }
        } else {
          currentExpression += "%";
        }

        updateOutput();
      } catch (error) {
        currentExpression = "Invalid Expression";
        updateOutput();
      }
    } else if (buttonText === "n!") {
      try {
        const num = eval(currentExpression);
        if (Number.isInteger(num) && num >= 0) {
          currentExpression = String(factorial(num));
        } else {
          currentExpression = "Invalid Expression";
        }
        updateOutput();
      } catch (error) {
        currentExpression = "Invalid Expression";
        updateOutput();
      }
    } else if (buttonText === "degrees") {
      try {
        currentExpression = `(${eval(currentExpression)} * Math.PI) / 180`; // Convert degrees to radians
        updateOutput();
      } catch (error) {
        currentExpression = "Invalid Expression";
        updateOutput();
      }
    } else if (buttonText === "radians") {
      try {
        currentExpression = `(${eval(currentExpression)} * 180) / Math.PI`; // Convert radians to degrees
        updateOutput();
      } catch (error) {
        currentExpression = "Invalid Expression";
        updateOutput();
      }
    } else if (buttonText === "+/-") {  // Toggle negative sign
      if (currentExpression[0] === '-') {
        currentExpression = currentExpression.slice(1);  // Remove negative sign
      } else {
        currentExpression = `-${currentExpression}`;  // Add negative sign
      }
      updateOutput();
    } else if (buttonText === "C") {  // Clear the expression
      currentExpression = "";
      updateOutput();
    } else {
      currentExpression += buttonText;
      updateOutput();
    }
  });
});

/**
 * calculator.js
 * Node.js CLI Calculator App
 *
 * Supported operations:
 *   add      - Addition (+): adds two numbers together
 *   subtract - Subtraction (−): subtracts the second number from the first
 *   multiply - Multiplication (×): multiplies two numbers together
 *   divide   - Division (÷): divides the first number by the second
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 3 5        → 8
 *   node calculator.js subtract 9 4   → 5
 *   node calculator.js multiply 6 7   → 42
 *   node calculator.js divide 10 2    → 5
 */

/**
 * Addition (+): returns the sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction (−): returns the difference of a minus b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication (×): returns the product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division (÷): returns the quotient of a divided by b.
 * Throws an error if b is zero.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Map operation names to functions
const operations = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [, , op, arg1, arg2] = process.argv;

  if (!op || arg1 === undefined || arg2 === undefined) {
    console.error("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(`Unknown operation "${op}". Use: add, subtract, multiply, divide.`);
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error("Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = operations[op](a, b);
    console.log(`${a} ${op} ${b} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide };

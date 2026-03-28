/**
 * calculator.js
 * Node.js CLI Calculator App
 *
 * Supported operations:
 *   add        - Addition (+): adds two numbers together
 *   subtract   - Subtraction (−): subtracts the second number from the first
 *   multiply   - Multiplication (×): multiplies two numbers together
 *   divide     - Division (÷): divides the first number by the second
 *   modulo     - Modulo (%): returns the remainder of a divided by b
 *   power      - Exponentiation (^): raises base to the given exponent
 *   squareRoot - Square Root (√): returns the square root of n (one argument)
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 3 5          → 8
 *   node calculator.js subtract 9 4     → 5
 *   node calculator.js multiply 6 7     → 42
 *   node calculator.js divide 10 2      → 5
 *   node calculator.js modulo 10 3      → 1
 *   node calculator.js power 2 8        → 256
 *   node calculator.js squareRoot 144   → 12
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

/**
 * Modulo (%): returns the remainder of a divided by b.
 * Throws an error if b is zero.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a % b;
}

/**
 * Exponentiation (^): returns base raised to the power of exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square Root (√): returns the square root of n.
 * Throws an error if n is negative.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot take the square root of a negative number.");
  }
  return Math.sqrt(n);
}

// Map operation names to functions
const operations = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const [, , op, arg1, arg2] = process.argv;

  if (!op || arg1 === undefined) {
    console.error("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]");
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(`Unknown operation "${op}". Use: add, subtract, multiply, divide, modulo, power, squareRoot.`);
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = arg2 !== undefined ? parseFloat(arg2) : undefined;

  if (isNaN(a)) {
    console.error("First argument must be a valid number.");
    process.exit(1);
  }

  // squareRoot only takes one argument
  if (op === "squareRoot") {
    try {
      console.log(`squareRoot(${a}) = ${operations[op](a)}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
  } else {
    if (b === undefined || isNaN(b)) {
      console.error("Both arguments must be valid numbers for this operation.");
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
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

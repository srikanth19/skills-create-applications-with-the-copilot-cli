/**
 * calculator.test.js
 * Comprehensive unit tests for the Node.js CLI Calculator App.
 *
 * Covers all four supported operations:
 *   - add      (Addition +)
 *   - subtract (Subtraction −)
 *   - multiply (Multiplication ×)
 *   - divide   (Division ÷)
 *
 * Includes image-based examples and edge cases.
 */

const { add, subtract, multiply, divide } = require("../calculator");

// ─── Addition ────────────────────────────────────────────────────────────────
describe("add", () => {
  // Example from image: 2 + 3 = 5
  test("adds two positive numbers (2 + 3 = 5)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and a negative number (5 + -3 = 2)", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds two negative numbers (-4 + -6 = -10)", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test("adding zero returns the same number (7 + 0 = 7)", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds floating-point numbers (1.5 + 2.5 = 4)", () => {
    expect(add(1.5, 2.5)).toBe(4);
  });

  test("adds two zeros (0 + 0 = 0)", () => {
    expect(add(0, 0)).toBe(0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe("subtract", () => {
  // Example from image: 10 - 4 = 6
  test("subtracts two positive numbers (10 - 4 = 6)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracting a larger number gives a negative result (3 - 8 = -5)", () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test("subtracts a negative number (5 - -3 = 8)", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracting zero returns the same number (9 - 0 = 9)", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts floating-point numbers (5.5 - 2.5 = 3)", () => {
    expect(subtract(5.5, 2.5)).toBe(3);
  });

  test("subtracting a number from itself returns zero (7 - 7 = 0)", () => {
    expect(subtract(7, 7)).toBe(0);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe("multiply", () => {
  // Example from image: 45 * 2 = 90
  test("multiplies two positive numbers (45 * 2 = 90)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies a positive and a negative number (6 * -3 = -18)", () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test("multiplies two negative numbers (-4 * -5 = 20)", () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test("multiplying by zero returns zero (8 * 0 = 0)", () => {
    expect(multiply(8, 0)).toBe(0);
  });

  test("multiplying by one returns the same number (7 * 1 = 7)", () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test("multiplies floating-point numbers (2.5 * 4 = 10)", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

// ─── Division ─────────────────────────────────────────────────────────────────
describe("divide", () => {
  // Example from image: 20 / 5 = 4
  test("divides two positive numbers (20 / 5 = 4)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides with a negative divisor (20 / -4 = -5)", () => {
    expect(divide(20, -4)).toBe(-5);
  });

  test("divides two negative numbers (-18 / -3 = 6)", () => {
    expect(divide(-18, -3)).toBe(6);
  });

  test("dividing zero by a number returns zero (0 / 5 = 0)", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides and returns a floating-point result (7 / 2 = 3.5)", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("dividing by one returns the same number (9 / 1 = 9)", () => {
    expect(divide(9, 1)).toBe(9);
  });

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

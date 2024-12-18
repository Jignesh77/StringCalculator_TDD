import { add } from './StringCalculator';

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number for a single number input', () => {
    expect(add("1")).toBe(1);
});

test('should return the sum for two numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('should return the sum for multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
});

test('should handle newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('should list all negative numbers in the exception message', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
  });
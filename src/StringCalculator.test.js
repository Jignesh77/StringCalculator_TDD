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

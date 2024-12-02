export const add = (numbers) => {
    if (!numbers) {
        return 0;
    }
    numbers = numbers.replace(/\n/g, ",");
    const parts = numbers.split(",").map(Number);
    return parts.reduce((sum, num) => sum + num, 0);
};
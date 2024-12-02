export const add = (numbers) => {
    if (!numbers) {
        return 0;
    }

    const { delimiter, cleanedNumbers } = parseInput(numbers);

    const parts = cleanedNumbers.split(delimiter).map((num) => parseInt(num, 10));

    validateNegatives(parts);

    return parts.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
};

const parseInput = (numbers) => {
    let delimiter = ",";
    let cleanedNumbers = numbers;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2);
        cleanedNumbers = parts.slice(1).join("\n");
    }

    cleanedNumbers = cleanedNumbers.replace(/\n/g, delimiter);

    return { delimiter, cleanedNumbers };
};

const validateNegatives = (numbers) => {
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
};

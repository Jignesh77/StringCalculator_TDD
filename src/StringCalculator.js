export const add = (numbers) => {
    if (!numbers) {
        return 0;
    }

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        // Extract the custom delimiter
        const parts = numbers.split("\n");
        delimiter = parts[0].substring(2); // Get the delimiter after "//"
        numbers = parts.slice(1).join("\n"); // Remove the delimiter declaration
    }

    // Replace all newlines with the delimiter
    numbers = numbers.replace(/\n/g, delimiter);

    // Split the string by the delimiter and convert to numbers
    const parts = numbers.split(delimiter).map((num) => {
        const parsed = parseInt(num, 10);
        return isNaN(parsed) ? 0 : parsed; // Handle invalid numbers as 0
    });

    // Return the sum of the parts
    return parts.reduce((sum, num) => sum + num, 0);
};

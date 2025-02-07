// 23. Remove duplicates from an array
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

// 24. Merge two arrays and remove duplicates
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2)));
}

// 25. Temperature Converter (Celsius to Fahrenheit and vice versa)
function convertTemperature(value, unit) {
    if (unit === 'C') {
        return (value * 9/5) + 32; // Convert Celsius to Fahrenheit
    } else if (unit === 'F') {
        return (value - 32) * 5/9; // Convert Fahrenheit to Celsius
    } else {
        return "Invalid unit! Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// 26. Find the GCD using loops
function findGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 27. Find the LCM
function findLCM(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / findGCD(a, b);
}

// 28. Generate a Random Password
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// 29. Count words in a sentence
function countWords(sentence) {
    if (typeof sentence !== "string" || sentence.trim() === "") return 0;
    return sentence.trim().split(/\s+/).length;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(convertTemperature(100, 'C')); // 212 (Fahrenheit)
console.log(convertTemperature(212, 'F')); // 100 (Celsius)
console.log(findGCD(48, 18)); // 6
console.log(findLCM(12, 15)); // 60
console.log(generatePassword(10)); // Random 10-character password
console.log(countWords("Hello world! This is a test.")); // 5
// 30. binary_to_decimal
def binary_to_decimal(binary_str):
    try:
        return int(binary_str, 2)
    except ValueError:
        return "Invalid binary number"

# Example usage:
print(binary_to_decimal("1010"))   # Output: 10
print(binary_to_decimal("1020"))   # Output: Invalid binary number
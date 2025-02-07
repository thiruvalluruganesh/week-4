// 17. Array Map (Square Numbers)
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

// 18. Array Reduce (Sum of Array)
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 19. Count Vowels in a String
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 20. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// 21. Leap Year Checker
function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
}

// 22. Sort an Array (without built-in sort function)
function sortArray(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example Usage
console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(countVowels("hello world")); // 3
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(isLeapYear(2024)); // true
console.log(sortArray([4, 2, 7, 1, 3])); // [1, 2, 3, 4, 7]
function rangeOfNumbers(startNum, endNum) {
    if (endNum === startNum) {
        return [startNum];
    }
    let result = rangeOfNumbers(startNum, endNum - 1);
    result.push(endNum);
    return result;
}

console.log(rangeOfNumbers(1, 5)) // => [1, 2, 3, 4, 5]
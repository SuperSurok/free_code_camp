function countdown(n) {
    if (n <= 0) {
        return [];
    }
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
}
// n = 10
console.log(countdown(10)) // => [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
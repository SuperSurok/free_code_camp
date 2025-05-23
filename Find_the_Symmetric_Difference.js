// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements
// which are in either of the two sets but not in both.
// For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements.
// So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), 
// you must complete one operation at a time.
// Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference.
// The returned array must contain only unique values (no duplicates).
function sym() {
    const arrs = [];

    for (let i = 0; i < arguments.length; i++) {
      arrs.push(arguments[i])
    }

    function symDiff(arr1, arr2) {
      const res = [];

      arr1.forEach(function(item) {
        if (arr2.indexOf(item) < 0 && res.indexOf(item) < 0) {
          res.push(item);
        }
      })

      arr2.forEach(function(item) {
        if (arr1.indexOf(item) < 0 && res.indexOf(item) < 0) {
          res.push(item);
        }
      })

      return res;
    }
    return arrs.reduce(symDiff);
}


sym([1, 2, 3], [5, 2, 1, 4]);

const diff = (arr1, arr2) => ([
    ...arr1.filter(item => !arr2.includes(item)),
    ...arr2.filter(item => !arr1.includes(item))
]);

const sym2 = (...args) => [...new Set(args.reduce(diff))];

// Given an array arr, find element pairs whose sum equal 
// the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements
// but different indices. Each pair should use the lowest possible
// available indices. Once an element has been used it cannot be reused 
// to pair with another element. For instance, pairwise([1, 1, 2], 3) 
// creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6.
// The pairs that sum to 20 are [7, 13] and [9, 11].
// We can then write out the array with their indices and values.

// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, arg){
  let sum = 0;
  let indices = [];

  for (let i = 0; i < arr.length; i++) {
    if (indices.includes(i)) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (indices.includes(j)) continue;

      if (arr[i] + arr[j] === arg) {
        sum += j + i;
        indices.push(j, i);
        break;
      }
    }
  }
  return sum;
}

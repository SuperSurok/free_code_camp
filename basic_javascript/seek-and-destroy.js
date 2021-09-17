// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

function destroyer(arr) {
  const res = Object.values(arguments).splice(1);
  return arr.filter(item => !res.includes(item))
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);

// ---Instructions:---
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
// If you need help, here's a reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// ---Submitted Solution:---
function take(arr, n) {
    return arr.slice(0, n)
}

// ---Test cases:---
console.log(take([0, 1, 2, 3, 5, 8, 13], 3))
console.log(take([0, 1, 2, 3, 5, 8, 13], 1))
console.log(take([0, 1, 2, 3, 5, 8, 13], 5))

// ---Instructions:---
// Task
// Given an array/list of integers, find the Nth smallest element in the array.
// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.

// ---P.R.E.P.---
// take in arr on ints, can have dupes, arr size at least 3
// return the nth smallest elem in arr as a num
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 

// ---Submitted Solution:---
function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1]
}

// ---Test cases:---
console.log(nthSmallest([3,1,2], 2)) // Answer: 2
console.log(nthSmallest([15,20,7,10,4,3], 3)) // Answer: 7
console.log(nthSmallest([-5,-1,-6,-18], 4)) // Answer: -1
console.log(nthSmallest([-102,-16,-1,-2,-367,-9], 5)) // Answer: -2
console.log(nthSmallest([2,169,13,-5,0,-1], 4)) // Answer: 2
console.log(nthSmallest([2,1,3,3,1,2], 3)) // Answer: 2

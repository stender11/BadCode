// ---Instructions:---
// LeetCode 136 - Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// ---P.R.E.P.---
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1
// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// ---Submitted Solution:---
const singleNumber = nums => {
    let numsMap = {};

    for (const num of nums) {
        numsMap[num] = numsMap[num] + 1 || 1;
    }

    for (const n in numsMap) {
        if (numsMap[n] === 1) return n;
    }
};

// ---Test cases:---
console.log(singleNumber([2,2,1]), 1);
console.log(singleNumber([4,1,2,1,2]), 4);
console.log(singleNumber([1]), 1);
console.log(singleNumber([0]), 0);

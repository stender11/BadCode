// ---Instructions:---
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// ---Submitted Solution:---
function filter_list(list) {
    return list.filter(e => typeof e !== "string")
}

// ---Test cases:---
console.log(filter_list([1,2,'a','b'])) // [1,2]
console.log(filter_list([1,'a','b',0,15])) // [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])) // [1,2,123]

// ---Instructions:---
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
// The number of dogs will always be a number and there will always be at least 1 dog.
// Good luck!

// ---Submitted Solution:---
function howManyDalmatians(number) {
    const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    const respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2]
    return respond
}

// ---Test cases:---
console.log(howManyDalmatians(7)) // --> "Hardly any"
console.log(howManyDalmatians(100)) // --> "Woah that's a lot of dogs!"

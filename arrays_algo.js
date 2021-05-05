// Algorithm Practice - Array

// Using the given array: 
//var testArr = [6,3,5,1,2,4]

// Challenge 1: Print Values and Sum
// Print each array value and the sum so far
var sum = 0;
var testArr = [6,3,5,1,2,4]
for(i=0; i<testArr.length; i++){
    sum += testArr[i]
    console.log("Num is " + testArr[i] +  ", Sum is " + sum)
}
//output:
// Num is 6, Sum is 6
// Num is 3, Sum is 9
// Num is 5, Sum is 14
// Num is 1, Sum is 15
// Num is 2, Sum is 17
// Num is 4, Sum is 21


// Challenge 2: Value * Position
//Multiply each value in the array by its array position
var testArr = [6,3,5,1,2,4]
var newArr = [];
for (var i = 0; i<testArr.length; i++){
    newArr.push(testArr[i]*i)
}
console.log(newArr)
//output: 
// [ 0, 3, 10, 3, 8, 20 ]
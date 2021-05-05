/* 
Array: Concat
.push allowed: arrName.push(newItem)
Replicate JavaScript’s concat() which combines two arrays into one NEW array
Input: two arrays
Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];

const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expected2 = [1, 2, 3, "a", "b"];


var result=[];
for (var i=0; i<arrA1.length; i++){
    result.push(arrA1[i]);
}
for (var i=0; i<arrB1.length; i++){
    result.push(arrB1[i]);
}





/* 
Given an array of integers
return the index where the smallest integer is located
return -1 if there is no smallest integer (array is empty) 
since -1 is not a valid index, this indicates it couldn't be found
If the smallest integer occurs more than once, return the index of the first one.
*/

const nums1 = [5, 2, 3];
const expected1 = 1;

const nums2 = [5, 4, 2, 2, 3];
const expected2 = 2;

const nums3 = [];
const expected3 = -1;


function indexOfSmallestNum(arr) {
    var minIndex = -1;
    var minValue = arr[0];
    for (i=1; i<arr.length; i++){ /* skip the first index bc linee 50 */
        if (arr[i]<minValue){
            minVal = arr[i]
            minIndex = i;
        }
    }
    return minIndex;
}


/* 
From zoom interview with student in year 2020
Given one array,
create a new array that contains all of the original items duplicated twice
*/

const arr1 = ["a", "b", "c"];
const expected1 = ["a", "b", "c", "a", "b", "c"];

const arr2 = ["a"];
const expected2 = ["a", "a"];

const arr3 = [];
const expected3 = [];

var result = [];
for(var i=0; i < 2; i++){
    for(varr j=0; j<arr1.length; j++){
        result.push(arr1[j]);
    }
}





/*****************************************************************************/
/* 
  Given an array, reverse it's items in place
  return the array after reversing it
  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
console.log(reverseArr(arr1))
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
console.log(reverseArr(arr2))
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];
console.log(reverseArr(arr3))

const arr4 = [];
const expected4 = [];
console.log(reverseArr(arr4))

function reverseArr(items) {
  var reverseItem = []
  for (var i = items.length-1; i >= 0; i--){
    reverseItem.push(items[i])
  }
  return reverseItem
}

/* 
  Recreate the built in .slice method
  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)
  What should you do if the provided end index is out of bounds?
*/

const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
console.log(slice(arr1, startIdx1, endIdx1))
const expected1 = ["a", "b", "c", "d", "e"];

const arr2 = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
console.log(slice(arr2, startIdx2, endIdx2))
const expected2 = ["a"];

const arr3 = ["a", "b", "c", "d", "e"];
const startIdx3 = 1;
const endIdx3 = 2;
console.log(slice(arr3, startIdx3, endIdx3))
const expected3 = ["b"];

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100;
const endIdx4 = 100;
console.log(slice(arr4, startIdx4, endIdx4))
const expected4 = ["a", "b", "c", "d", "e"];

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
console.log(slice(arr5, startIdx5, endIdx5))
const expected5 = [];

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
console.log(slice(arr6, startIdx6, endIdx6))
const expected6 = [];

function slice(items, startIdx, endIdx) {
  var newItems = [];
  if (startIdx < 0){
    startIdx = 0
  }
  if (endIdx > items.length-1){
    endIdx = items.length
  }
  if (startIdx == endIdx){
    return []
  }
  for (var i = startIdx; i < endIdx; i++ ){
    newItems.push(items[i])
  }
  return newItems
}



/*****************************************************************************/
/* 
  Given array and an additional value, insert this value at the beginning of the array by making space for it at the beginning of the array.
  return the new length of the array.
  
  Do this without using any built-in array methods.
*/

const arr1 = [1, 2, 3];
const newItem1 = 0;
const expected1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2 = [];
const newItem2 = "a";
const expected2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ["a"];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */
function unshift(items, newItem) {
  // code here
  for (var i = items.length; i > 0; i--){
    items[i] = items[i-1]
  }
  items[0] = newItem
  console.log(items)
  return items.length
}
console.log(unshift(arr1, 0))
/*
  another solution is we could do this:
  items.length = items.length +1 
  this automatically increases the array size, and the last place is "undefined" until later filled!
*/

/* 
  Given an array, remove and
  return the value at the beginning of the array and then shift the remaining items down to fill the empty space.
  Do this without using any built-in array methods except pop().
*/

const arr1 = [1, 2, 3];
const expected1 = 1;
// after running function arr1 should now be:
const arr1Expected = [2, 3];

const arr2 = ["a", "b", "c", "d"];
const expected2 = "a";
// after running function arr2 should now be:
const arr2Expected = ["b", "c", "d"];

/**
 * Shifts every item of the array to the left by 1 so that the first item is
 * removed and returned.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @returns {any} The removed value previously at idx 0.
 */
function shift(items) {
  // code here
  var toBeDeleted = items[0]
  for (var i = 1; i < items.length; i++){
    items[i-1] = items[i]
  }
  items.pop()
  console.log(items)
  return toBeDeleted
}
const arr1 = [1, 2, 3];
console.log(shift(arr1))

/*****************************************************************************/
/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

const arr1 = ["a", "b", "c", "d", "e"];
const removeIdx1 = 1;
const expected1 = "b";
// after function call, arr1 should be:
const arr1Expected = ["a", "c", "d", "e"];

const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

function removeAt(items, idx) {
  if (idx >= items.length || idx < 0 ){
    return null
  }
  var removedNum = items[idx]
  for (var i = idx; i < items.length; i++){ // ed did items.length -1 for the middle condition
    items[i] = items[i+1]
  }
  items.pop() // or can do items.length = items.length -1 
  console.log(items)
  return removedNum
}
console.log(removeAt( ["a", "b", "c", "d", "e"], 4))
console.log(removeAt( ["a", "b", "c", "d", "e"], -3))
console.log(removeAt( ["a", "b", "c"], 3))


/* 
  Given an array, move the minimum value to the front in-place
  return the array after done.
  No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  var minVal = nums[0]
  var temp = null
  // find the min value
  for (var i = 1; i < nums.length; i++){
    if (nums[i] < minVal){
      minVal = nums[i]
    }
  }
  // shift the minVal up to index 0
  for (var j = nums.length - 1; j > 0; j--){
    if (nums[j] == minVal){
      temp = nums[j]
      nums[j] = nums[j-1]
      nums[j-1] = temp
    }
  }
  return nums
}
console.log(minToFront([6, 4, 5, 1, 3, 2]))

// ed's solution:
function minToFront(nums) {
  // find the min value and the index of that!
  var minIdx = 0;
  var minVal = nums[0]
  for (var i = 1; i < nums.length; i++){
    if(nums[i] < minVal){
      minVal = nums[i]
      minIdx = i
    }
  }
  // slide over values from front to where the min index is 
  for (var i = minIdx; i >= 1; i--){
    nums[i] = nums[i-1]
  }
  nums[0] = minVal
  return nums
}
// mine doesnt work if there are two min values!!!!

/*****************************************************************************/
/* 
  Array: Second-Largest
  Return the second-largest element of an array, or null if there is none.
  Bonus: do it with one loop and no nested loops
*/

// 2nd largest is 2nd
const nums1 = [2, 3, 1, 4];
const expected1 = 3;

// largest is first
const nums2 = [4, 1, 3, 2];
const expected2 = 3;

// largest duplicated first
const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

// 2nd largest is first
const nums4 = [3, 1, 4, 2];
const expected4 = 3;

// largest is 2nd
const nums5 = [3, 4, 2, 1];
const expected5 = 3;

const nums6 = [3, 3];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

function secondLargest(nums) {
  // code here

}

/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const twoDimArr2 = [[1], [2], [3]];
const expected2 = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expected3 = [10, 20];

function flatten2dArray(twoDimArr) {
  // code here
  var onedArr = [];
  for (var i = 0; i < twoDimArr.length; i++){
    if (Array.isArray(twoDimArr[i])){
      for (var j = 0; j < twoDimArr[i].length; j++){
        onedArr.push(twoDimArr[i][j])
      }
    }
    else{
      onedArr.push(twoDimArr[i])
    }
  }
  return onedArr
  }
const twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(flatten2dArray(twoDimArr1))

const twoDimArr2 = [
  ["hi", "hello", "hey"],
  [4, "asfas", 6],
  [7, 8, 9],
];
console.log(flatten2dArray(twoDimArr2))

var challengeArr = [1,3,4,[5,6],7,8,[9]]
console.log(flatten2dArray(challengeArr))
var challengeResult = [1,3,4,5,6,7,8,9]

const twoDimArr3 = [[1], [2], [3]];
console.log(flatten2dArray(twoDimArr3))
const expected2 = [1, 2, 3];

const twoDimArr4 = [[], [], [10, 20]];
console.log(flatten2dArray(twoDimArr4))
const expected3 = [10, 20];


/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

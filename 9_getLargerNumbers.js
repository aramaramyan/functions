"use strict";

/* Write a function which receives an array and a number as arguments and returns a new
	array from the elements of the given array which are larger than the given number. */

function getLargerNumbers(arr, num) {
	const result = arr.filter(item => item > num);

	return (result.length === 0) ? "Such values do not exist." : result;
}

console.log(getLargerNumbers([10, 25, 16, -5, 30, 15, 24], 16));  // [25, 30, 24]
console.log(getLargerNumbers([1, 1, 2, -3, 0, 8, 4, 0], 9));	   // Such values do not exist.
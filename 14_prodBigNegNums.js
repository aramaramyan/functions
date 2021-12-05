"use strict";

/* Write a function, which receives an array as an argument which elements arrays of
	numbers. Find product of biggest negative number of each array. If there is not any
	negative number, ignore that array. Check that items of the given array are arrays. */

function bigNegNum(arr) {
	if (!Array.isArray(arr[0])) {
		return "Invalid Argument";
	}

	let negative = arr.map(innerArr => innerArr.filter(val => val < 0).reduce((aggr, val) => aggr + val, 0));

	if (negative.reduce((aggr, val) => aggr + val, 0) === 0) {
		return "No negatives";
	}

	let result = negative.filter(item => item < 0);

	return Math.max(...result);
}

console.log(bigNegNum([[2, -9, -3, 0], [1, 2], [-4, -11, 0]])); // -12
console.log(bigNegNum([[3, 4], [11, 0], [5, 6, 7, 8]]));        // No negatives
console.log(bigNegNum([1, 2, 3]));                              // Invalid Argument
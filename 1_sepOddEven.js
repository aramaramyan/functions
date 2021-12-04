"use strict";

// Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

function sepOddEven(arr) {
	if (!Array.isArray(arr)) return console.log("The argument must be an array!");

	let oddNumbers = [];
	let evenNumbers = [];

	arr.forEach(val => (val % 2 === 0) ? evenNumbers.push(val) : oddNumbers.push(val));

	return console.log(oddNumbers, evenNumbers)
}

sepOddEven([45, 12, 3, 6, 17, 0]); // [ 45, 3, 17 ] [ 12, 6, 0 ]
sepOddEven([1, 3, 5, 9]);          // [ 1, 3, 5, 9 ] []
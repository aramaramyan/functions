"use strict";

/* Write a function, which receives two numbers as arguments and finds all numbers between them
	such that each digit of the number is even. The numbers obtained should be printed in a comma-
	separated sequence on a single line. */

function getEvenDigitNumbers(min, max) {
	let numArr = [];
	let minNum = min;

	for (let i = 0; i <= (max - min); i++) {
		numArr[i] = "" + minNum++;
	}

	let result = numArr.filter(item => {
		for (let i = 0; i < item.length; i++) {
			let digit = +item[i];
			if (digit % 2 !== 0) {
				return false;
			}
		}
		return true;
	});

	return (!result[0]) ? "Such numbers does not exist." : result.map(item => item = +item);

}

console.log(getEvenDigitNumbers(19, 42));  // [20, 22, 24, 26, 28, 40, 42]
console.log(getEvenDigitNumbers(99, 199)); // Such numbers does not exist.
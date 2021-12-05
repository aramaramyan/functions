"use strict";

/* 
Write a function that calculates sum, difference, multiplication and division between
given array elements depending on passed operation symbol. Write appropriate function
for each operation. 
*/

function sum(arr) {
	return arr.reduce((aggr, val) => aggr + val);
}

function diff(arr) {
	return arr.reduce((aggr, val) => aggr - val);
}

function mul(arr) {
	return arr.reduce((aggr, val) => aggr * val);
}

function div(arr) {
	return arr.reduce((aggr, val) => aggr / val);
}

function calculate(arr, operator) {
	if (!Array.isArray(arr) && (arguments.length !== 2)) {
		return "Please give an array to the firts argument and string('+', '-', '*' or '/') to the second argumnet!";
	}

	switch (operator) {
		case "+":
			return sum(arr);
		case "-":
			return diff(arr);
		case "*":
			return mul(arr);
		case "/":
			return div(arr);
		default:
			return ("Wrong operator symbol!");
	}
}

console.log(calculate([10, 2], "+")); // 12
console.log(calculate([10, 2], "-")); // 8
console.log(calculate([10, 2], "*")); // 20
console.log(calculate([10, 2], "/")); // 5
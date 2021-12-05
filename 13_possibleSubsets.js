"use strict";

/* Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
	elements in the array are unique. */

function arrMaker(arr) {
	let mainArr = [];

	for (let i = 1; i < arr.length - 1; i++) {
		let j = i + 1;
		while (j < arr.length) {
			mainArr.push([arr[0], arr[i], arr[j]]);
			j++
		}
	}

	if (arr.length !== 2) {
		arr.shift();
		arrMaker(arr);
	}

	return mainArr
}

function possibleSubsets(arr) {

	if (arr.length < 3) {
		return arr;
	}

	return arrMaker(arr);

}

console.log(possibleSubsets([4]));
console.log(possibleSubsets([19, 6]));
console.log(possibleSubsets([5, 9, 23, 0, -2, -1]));
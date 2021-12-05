"use strict";

// Given a word and a list of possible anagrams, select the correct sublist.

function correctSublist(word, arr) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		let wordSort = word.split("").sort().join("");
		let arrSort = arr[i].split("").sort().join("");

		if (wordSort === arrSort) {
			result.push(arr[i]);
		}
	}

	return result;
}

console.log(correctSublist("listen", ["enlists", "google", "inlets", "banana"]));            // ['inlets']
console.log(correctSublist("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])); // ['licnep', 'nilcpe']
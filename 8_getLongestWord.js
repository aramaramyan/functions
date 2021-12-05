"use strict";

/* Write a function that accepts a string(a sentence) as a parameter and finds the longest
	word within the string․ If there are several words which are the longest ones, print the
	last word(words can be separated by space, comma or hyphen). */

function getLongestWord(text) {
	let longestWord = "";

	text.split(" ").map(item => {
		if ((/[.,?!]/).test(item[item.length - 1])) {
			item = item.slice(0, item.length - 1)
		}

		return item;
	}).forEach(item => {
		if (item.length > longestWord.length) {
			longestWord = item;
		}
	});

	return longestWord;
}

console.log(getLongestWord("A revolution without dancing is a revolution not worth having."));        // revolution
console.log(getLongestWord("Which would be worse - to live as a monster, or to die as a good man?")); // monster
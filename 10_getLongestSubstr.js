"use strict";

/* Write a function to find longest substring in a given a string without repeating characters
	except space character.
	If there are several, return the last one. Consider that all letters are lowercase. */

function checkIf(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val && arr[i] !== " ") {
			return true;
		}
	}
	return false;
}

function longSubstr(text) {
	let substrArr = [];
	let result = [];

	for (let i = 0; i < text.length; i++) {

		substrArr.push(text[i]);

		if (checkIf(substrArr, text[i + 1])) {
			result.push(substrArr.join(""));
			substrArr = [];
			text = text.substr(1);
			i = 0;
		}
	}

	return result;
}

function getLongestSubstr(text) {
	let substring = "";
	let result = longSubstr(text);

	result.forEach(item => {
		if (item.length > substring.length) {
			substring = item;
		}
	});

	return substring;
}

console.log(getLongestSubstr('there are no two words in the english language more harmful than "good job".'))
console.log(getLongestSubstr("parting your soup is not a miracle, bruce"));
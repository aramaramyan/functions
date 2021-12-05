"use strict";

/* Write a function, which receives a string, finds possible largest numbers in the string and returns their
	sum. */

function getPossibleNumSum(str) {
	let numbersOnly = "";

	Outer: for (let i = 0; i < str.length; i++) {

		if (+str[i] || +str[i] === 0 || str[i] === "-") {
			numbersOnly += str[i];
			for (i++; i < str.length; i++) {
				if (+str[i] || +str[i] === 0 || str[i] === "-") {
					numbersOnly += str[i];
				} else {
					numbersOnly += ",";
					continue Outer;
				}
			}
		}
	}

	return numbersOnly.split(",").reduce((aggr, val) => +aggr + +val);
}

console.log(getPossibleNumSum("FwrtY45KHL120mn10P")); // 175
console.log(getPossibleNumSum("Wert12lop-12"));			// 0
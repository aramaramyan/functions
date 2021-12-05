"use strict";

/*
Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

1). If the phone number is less than 10 digits assume that it is a bad number
2). If the phone number is longer than 10, then it is a bad number
3). If the phone number is 10 digits assume that it is good
4). If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
	 and return remaining 10 digits.
5). If the phone number contains + symbol more than one, consider it as a bad number.
6). If the phone number contains + symbol not as the first character, consider it as a badnumber.

Ignore spaces between digits.
*/

function isValidNumber(number) {

	number = number.split("").filter(digit => digit !== " ");

	if (number[0] === "+" && number.length === 11 && !(/[A-Za-z.*+?^${}()|[\]\\]/).test(number.slice(1))) {
		return number.slice(1).join("");
	} else if (number.length === 10 && !(/[A-Za-z.*+?^${}()|[\]\\]/).test(number)) {
		return number.join("");
	}

	return "Bad number";
}

console.log(isValidNumber("455678"));         // Bad number
console.log(isValidNumber("339 5656888"));    // 3395656888
console.log(isValidNumber("+0008989562"));    // 0008989562
console.log(isValidNumber("45231489562"));    // Bad number
console.log(isValidNumber("123+2356897452")); // Bad number
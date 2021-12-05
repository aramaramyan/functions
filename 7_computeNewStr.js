"use strict";

/* Write a function to compute a new string from the given one by moving the first char to come after
	the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars.
	Ignore any group of fewer than 3 chars at the end. */

function divider(text) {
	const textArr = [];

	for (let i = 0; i <= text.length; i++) {
		if (text.length === 3) {
			textArr[i] = text;
			break;
		} else if (text.length === 4 || text.length === 5) {
			textArr[i] = text.substr(0, 3);
			text = text.substr(3);
			textArr[i + 1] = text;
			break;
		} else {
			textArr[i] = text.substr(0, 3);
			text = text.substr(3);
		}
	}

	return textArr;
}

function computeNewStr(text) {
	const textArr = divider(text);

	return textArr.map(item => (item.length < 3) ? item : `${item[1]}${item[2]}${item[0]}`).join("");
}

console.log(computeNewStr("dfgjkloyp")); // fgdkljypo
console.log(computeNewStr("aweyoolp"));  // weaooylp
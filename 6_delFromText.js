"use strict";

/* Write a function which receives two strings and removes appearances of the second string from the
	first one. */

function delFromText(text, del) {

	for (let i = 0; i < text.length; i++) {
		if (text.substr(i, del.length) === del) {
			text = text.substr(0, i) + text.substr(i + del.length);
			i = 0;
		}
	}

	return text;
}

console.log(delFromText("This is some text.", "is"));
console.log(delFromText("Yes, London. You know: fish, chips, cup ‘o tea, bad food,worse weather", "o"));
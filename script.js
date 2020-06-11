'use strict';

let message = prompt('Введите любую строку', '');

const stringTrim = (string) => {
	if(typeof string !== 'string') {
		console.log('не строка, введите строку');
		string = prompt('Введите любую строку', '')
	} else {
		string = string.trim();
	}
	return hideSimbol(string);
}
const hideSimbol = (string) => {
	if(string.length > 30) {
		return string.slice(0, 30) + '...';
	} else {
		return string;
	}
}
console.log(stringTrim(message));
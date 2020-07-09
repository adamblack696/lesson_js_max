'use strict';

const color = document.querySelector('.collor'),
			change = document.querySelector('.change');

const arr16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const showColor = () => {
	document.body.style.backgroundColor = color.textContent;
	change.style.color = color.textContent;
}
const hexGen = () => Math.floor(Math.random() * (255));

const hexChange16 = () => {
	const n = hexGen();
	return arr16[parseInt(n / 16)] + '' + arr16[n % 16];
};

const colorGen = () => {
	let acc = '';
	for(let i = 0; i < 3; i++) {
		acc += hexChange16();
	}
	return acc;
}
showColor();
change.addEventListener('click', () => {
	color.textContent = '#' + colorGen();
	showColor();
});
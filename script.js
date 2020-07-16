'use strict';

const color = document.querySelector('.collor'),
			change = document.querySelector('.change');

const showColor = () => {
	document.body.style.backgroundColor = color.textContent;
	change.style.color = color.textContent;
}
const hexGen = () => Math.floor(Math.random() * (255));

const colorGen = () => {
	let acc = '';
	for(let i = 0; i < 3; i++) {
		acc += hexGen().toString(16);
	}
	return acc;
}
showColor();
change.addEventListener('click', () => {
	color.textContent = '#' + colorGen();
	showColor();
});
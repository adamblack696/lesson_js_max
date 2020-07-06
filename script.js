'use strict';

const color = document.querySelector('.collor'),
			change = document.querySelector('.change');

const showColor = () => {
	document.body.style.backgroundColor = color.textContent;
}

change.addEventListener('click', () => {
	color.textContent = Math.floor(Math.random() * (16777215));
	showColor();
});
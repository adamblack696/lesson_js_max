'use strict';

const weekWrap = document.querySelector('.week ul');
const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sanday'];
const date = new Date();

week.forEach((day) => {
	weekWrap.insertAdjacentHTML('beforeend', `<li>${day}</li>`);
});

const weekList = document.querySelectorAll('.week li');

weekList.forEach((day, index) => {
	if(day.textContent === 'saturday' || day.textContent === 'sanday') {
		day.classList.add('weekend');
	}
	if(index + 1 === date.getDay()) {
		day.classList.add('this');
	}
});
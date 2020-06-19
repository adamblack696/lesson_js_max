'use strict';
const weekWrap = document.querySelector('.week ul');
const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sanday'];
const date = new Date();
const whichWeekShow = (index) => {
	if(index === 5 || index === 6) {
		return 'weekend';
	} else if(index + 1 === date.getDay()) {
		return 'this';
	} else {
		return 'day';
	}
}
week.forEach((day, index) => {
	const className = whichWeekShow(index);
	weekWrap.insertAdjacentHTML('beforeend', `<li class='${className}'>${day}</li>`);
});
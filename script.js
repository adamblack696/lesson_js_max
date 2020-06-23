'use strict';

const date = new Date();

const time = document.querySelector('.time');

const weekDay = ['понедельник', 'вторник', 'среда', 
								'четверг', 'пятница', 'суббота', 
								'воскресенье'],
month = ['январь', 'февраль', 'март', 
				'апрель', 'май', 'июнь', 
				'июль', 'август', 'сентябрь', 
				'октябрь', 'ноябрь', 'декабрь'];

let getDay = weekDay[date.getDay() - 1];

getDay = getDay[0].toUpperCase() + getDay.slice(1);



const declensionMonth = () => {
	const getMonth = date.getMonth();
	if(getMonth === 2 || getMonth === 7) {
		return month[getMonth] + 'а';
	} else {
		return month[getMonth].slice(0, (month[getMonth].length - 1)) + 'я';
	}
}

const declansionHours = () => {
	const getHours = date.getHours().toString();
	if(getHours[getHours.length - 1] === 1) {
		return getHours + ' час';
	} else if(getHours[getHours.length - 1] === 2 || getHours[getHours.length - 1] === 3 || getHours === 4) {
		return getHours + ' часа';
	} else {
		return  getHours + ' часов';
	}
}

const declansion = (arg, word) => {
	const argString = arg.toString();
	if(argString[argString.length - 1] === '1') {
		return argString + ' ' + word + 'а';
	} else if(argString[0] !== 1 && (argString[argString.length - 1] === 2 || argString[argString.length - 1] === 3 || argString[argString.length - 1] === '4')) {
		return argString + ' ' + word + 'ы';
	} else {
		return argString + ' ' + word;
	}
}

const numberInsert = (number) => {
	let numberString = number.toString();
	console.log(numberString);
	if (numberString.length === 1) {
		return 0 + numberString;
	} else {
		return numberString;
	}
}

time.insertAdjacentHTML('beforebegin', `
	<p class="at-time">Сегодня ${getDay}, ${date.getDate()} ${declensionMonth()} ${date.getFullYear()} год ${declansionHours()} ${declansion(date.getMinutes(), 'минут')} ${declansion(date.getSeconds(), 'секунд')}</p>
	<p class="at-time">${numberInsert(date.getDay())}.${numberInsert(date.getMonth())}.${date.getFullYear()} - ${numberInsert(date.getHours())}:${numberInsert(date.getMinutes())}:${numberInsert(date.getSeconds())}</p>
`);
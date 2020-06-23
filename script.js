'use strict';

const time = document.querySelector('.time');
const start = () => {
	const date = new Date();
	const watch = {

		weekDay: ['понедельник', 'вторник', 'среда', 
							'четверг', 'пятница', 'суббота', 
							'воскресенье'],
		month: ['январь', 'февраль', 'март', 
						'апрель', 'май', 'июнь', 
						'июль', 'август', 'сентябрь', 
						'октябрь', 'ноябрь', 'декабрь'],
		getDay: () => {
			const day = watch.weekDay[date.getDay() - 1];
			return watch.getDay = day[0].toUpperCase() + day.slice(1);
		},
		declensionMonth: () => {
			const getMonth = date.getMonth();
			if(getMonth === 2 || getMonth === 7) {
				return this.month[getMonth] + 'а';
			} else {
				return watch.month[getMonth].slice(0, (watch.month[getMonth].length - 1)) + 'я';
			}
		},
		declansionHours: () => {
			const getHours = date.getHours().toString();
			if(getHours[getHours.length - 1] === 1) {
				return getHours + ' час';
			} else if(getHours[getHours.length - 1] === 2 || getHours[getHours.length - 1] === 3 || getHours === 4) {
				return getHours + ' часа';
			} else {
				return  getHours + ' часов';
			}
		},
		declansion: (arg, word) => {
			const argString = arg.toString();
			if(argString[argString.length - 1] === '1') {
				return argString + ' ' + word + 'а';
			} else if(argString[0] !== 1 && (argString[argString.length - 1] === 2 || argString[argString.length - 1] === 3 || argString[argString.length - 1] === '4')) {
				return argString + ' ' + word + 'ы';
			} else {
				return argString + ' ' + word;
			}
		},
		numberInsert: (number) => {
			let numberString = number.toString();
			if (numberString.length === 1) {
				return 0 + numberString;
			} else {
				return numberString;
			}
		}
	}

	time.innerHTML = `
		<p class="at-time">Сегодня ${watch.getDay()}, ${date.getDate()} ${watch.declensionMonth()} ${date.getFullYear()} год ${watch.declansionHours()} ${watch.declansion(date.getMinutes(), 'минут')} ${watch.declansion(date.getSeconds(), 'секунд')}</p>
		<p class="at-time">${watch.numberInsert(date.getDay())}.${watch.numberInsert(date.getMonth())}.${date.getFullYear()} - ${watch.numberInsert(date.getHours())}:${watch.numberInsert(date.getMinutes())}:${watch.numberInsert(date.getSeconds())}</p>
	`;
}

setInterval(start, 1000);
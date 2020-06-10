'use strict';

const language = confirm('Ваш язык русский?'),
dayWeekRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
dayWeekEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
namePerson = 'Артем';

if(language)	{
	console.log(dayWeekRu)
} else {
	console.log(dayWeekEn)
};

switch (language) {
	case true:
		console.log(dayWeekRu);
		break;
	case false:
		console.log(dayWeekEn);
		break;
}

let days = [];
		days[true] = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
		days[false] = ['monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

console.log('Дни недели: ', days[language]);

namePerson === 'Артем' ?  console.log(namePerson + ' директор'):
namePerson === 'Максим' ? console.log(namePerson + ' преподаватель'):
console.log(namePerson + 'студент');
'use strict';

const language = document.querySelector('html').attributes.lang.value,
dayWeekRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
dayWeekEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
namePerson = 'Артем';

if(language === 'ru')	{
	console.log(dayWeekRu)
} else if(language === 'en') {
	console.log(dayWeekEn)
};

switch (language) {
	case 'ru':
		console.log(dayWeekRu);
		break;
	case 'en':
		console.log(dayWeekEn);
		break;
}

let days = [];
		days['ru'] = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
		days['en'] = ['monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

console.log('Дни недели: ', days[language]);

namePerson === 'Артем' ?  console.log(namePerson + ' директор'):
namePerson === 'Максим' ? console.log(namePerson + ' преподаватель'):
console.log(namePerson + 'студент');
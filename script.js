'use strict';

let users = JSON.parse(localStorage.getItem('users')) || [],
	date = new Date();

const month = ['января', 'февраля', 'мара', 'апреля', 'мая', 'июня', 'июля', 'сентября', 'октября', 'ноября', 'декабря'];

const buttons = document.querySelectorAll('button'),
	buttonReg = buttons[0],
	buttonAutorized = buttons[1];

const isString = (string) => {
	if (typeof(string) === 'object') {
		let newString;
		if (string.length === 2) {
			for (let i = 0; i < 2; i ++) {
				newString = string[i].match(/[a-zA-Z | а-яА-Я]/g);
				if(newString) {
					console.log(newString);
					return string[i] === newString.join('');
				} else return false;
			} 
		}	else return false;
	} else {
		let newString = string.match(/[a-zA-Z | а-яА-Я]/g);
		if(newString) {
			return string === newString.join('');
		} else return false;
	}
}

const render = () => {
	const ul = document.querySelector('.wrapper > ul');
	ul.textContent = '';
	users.forEach((obj) => {
		let li = document.createElement('li');
		obj = JSON.parse(obj);
		li.textContent = `Имя: ${obj.name[0]}, Фамилия: ${obj.name[1]}, Зарегистрирован: ${obj.date}`;
		ul.append(li);
	});
};

const question = () => {
	const obj = {};
	do {
		obj.name = prompt('Введите Имя и Фамилию', '');
		obj.name = obj.name.split(' ');
	}
	while (!isString(obj.name));
	do {
		obj.login = prompt('Введите логин', '');
	}
	while (!isString(obj.login));
	do {
		obj.password = prompt('Введите пароль', '');
	}
	while (!isString(obj.password));
	obj.date = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}г., ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	
	users.push(JSON.stringify(obj));
	localStorage.setItem('users', JSON.stringify(users));
	render();
};
render();
buttonReg.addEventListener('click', question);
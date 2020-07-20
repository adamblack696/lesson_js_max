'use strict';

let users = JSON.parse(localStorage?.getItem('users')) || [],
	date = new Date();

const month = ['января', 'февраля', 'мара', 'апреля', 'мая', 'июня', 'июля', 'сентября', 'октября', 'ноября', 'декабря'];

const buttons = document.querySelectorAll('button'),
	h1 = document.querySelector('h1'),
	ul = document.querySelector('.wrapper > ul'),
	buttonReg = buttons[0],
	buttonAutorized = buttons[1];

const isString = (string) => {
	if (typeof(string) === 'object') {
		let newString;
		if (string.length === 2) {
			for (let i = 0; i < 2; i ++) {
				newString = string[i].match(/[a-zA-Z | а-яА-Я]/g);
				if(newString) {
					return string[i] === newString.join('');
				} else return false;
			} 
		}	else return false;
	} else {
		let newString = string.match(/[a-zA-Z | а-яА-Я]/g);
		if(newString) {
			return string === newString.join('');
		} return false;
	}
}

const isLogin = (login) => {
	let newLogin = login.match(/[a-zA-Z | а-яА-Я | 1-9]/g);
	if(newLogin) {
		return login === newLogin.join('');
	} return false;
}

const render = () => {
	ul.textContent = '';
	users.forEach((obj) => {
		const li = document.createElement('li'),
		button = document.createElement('button');
		button.textContent = 'удалить';
		obj = JSON.parse(obj);
		li.textContent = `Имя: ${obj.name[0]}, Фамилия: ${obj.name[1]}, Зарегистрирован: ${obj.date}`;
		li.append(button);
		ul.append(li);
	});
};

const question = () => {
	const obj = {};
	do {
		obj.name = prompt('Введите через пробел Имя и Фамилию', '');
		obj.name = obj.name.split(' ');
	}
	while (!isString(obj.name));
	do {
		obj.login = prompt('Введите логин', '');
	}
	while (!isLogin(obj.login));
	do {
		obj.password = prompt('Введите пароль', '');
	}
	while (!obj.password);
	obj.date = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}г., ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	
	users.push(JSON.stringify(obj));
	localStorage.setItem('users', JSON.stringify(users));
	render();
};

const showUser = () => {
	let loginInput, passwordInput;
	do {
		loginInput = prompt('Введите логин', '');
	}
	while (!isLogin(loginInput));
	do {
		passwordInput = prompt('Введите пароль', '');
	}
	while (!passwordInput);
	if (users) {
		const index = users.findIndex((string) => {
			let obj = JSON.parse(string);
			let {login, password, name} = obj;
			if(login === loginInput && password === passwordInput) {
				h1.textContent = `Привет ${name[0]}`;
				return true;
			}
		});
		if (index === -1) {
			alert('Пользователь не найден!');
			return false;
		}
	};
};
render();
buttonReg.addEventListener('click', question);
buttonAutorized.addEventListener('click', showUser);
ul.addEventListener('click', (event) => {
	const target = event.target;
	if (target.tagName === 'BUTTON') {
		target.parentNode.remove();
		let text = target.parentNode.textContent;
		users.find((obj) => {
			const index = text.indexOf(JSON.parse(obj).name[0]);
			if (index > -1) {
				console.log(h1.textContent.indexOf(JSON.parse(obj).name[0]));
				if(h1.textContent.indexOf(JSON.parse(obj).name[0])) {
					h1.textContent = 'Привет Аноним!';
				}
				users.splice(obj, 1);
				localStorage.setItem('users', JSON.stringify(users));
				return true;
			}
		});
	}
});
'use strict';

const users = [];

const isString = (string) => {
	if(string) {
		return string === string.match(/[A-Za-z]/g).join('');
	} 
	return false;
}

const question = () => {
	users.push({});
	do {
		users[0].name = prompt('Введите Имя и Фамилию', ''),
		users[0].login = prompt('Введите логин', ''),
		users[0].password = prompt('Введите пароль', '');
	} while(isString())
}
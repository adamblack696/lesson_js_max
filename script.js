'use strict';

const arrCreate = () => {
	let arr = prompt('Введите 7 любых многозначных чисел через запятую', '');
	return arr.split(',');
}

const isNumber = (item) => {
	return !isNaN(parseFloat(item)) && isFinite(item);
}

const arrCheckItem = () => {
	let arr = arrCreate();
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if(!isNumber(arr[i])) {
			console.log('work1');
			return arrCheckItem();
		} 
		if(+arr[i][0] === 2 || +arr[i][0] === 4) {
			console.log('work2');
			newArr.push(arr[i]);
		} 
		if(i === (arr.length - 1)) {
			console.log('work3');
			return newArr;
		}
	};
}
console.log(arrCheckItem());



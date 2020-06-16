'use strict';

const arrCreate = () => {
	let arr = prompt('Введите 7 любых многозначных чисел через запятую', '');
	if(arr) {
		return arr.split(',');
	} else {
		return false;
	}
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


const primeNumbersCreate = (start, finish) => {
	let arr = [];
	for(let startIteration = start + 1; startIteration <= finish; startIteration++) {
		for(let i = 1; i <= startIteration; i++) {
			if((startIteration % i === 0) && (i !== startIteration && i !== 1)) {
				// если старт делится на какое то число помимо себя самого (старата) и 1, то цикл прекращается и продолжается верхний цикл, в котором старт увеличивается
				break;
			} else if(i === startIteration) {
				arr.push([startIteration, `Делители этого числа: 1 и ${startIteration}`]);
			}
		}
	}
	return arr;
}

const arr = primeNumbersCreate(1, 100);
console.table(arr);

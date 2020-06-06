let num = 266219;


let numArr = num.toString().split('');

result = numArr.reduce((akk, number) => {
	return akk * number;
}, 1);

console.log(result);

result = result ** 3;
	
console.log(result);

console.log(result.toString().slice(0, 2));
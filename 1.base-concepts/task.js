"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discr = b ** 2 - 4 * a * c;

	if (discr > 0) {
		arr.push((-b + Math.sqrt(discr)) / (2 * a));
		arr.push((-b - Math.sqrt(discr)) / (2 * a));
	} else if (discr === 0) {
		arr.push(-b / (2 * a));
	} else /* discr < 0 */ {
		// ничего не делать
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let s = amount - contribution;
	let p = (percent * 0.01) / 12;
	let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	let sum = payment * countMonths;

	return +sum.toFixed(2);
}
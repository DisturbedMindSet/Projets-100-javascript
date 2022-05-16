"use strict";

const bill = document.querySelector("#bill-input");
const person = document.querySelector(".person__input");
const tips = document.querySelectorAll(".tips");
const tipCostum = document.querySelector(".tip-costum");

const tip = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".error");
const errorNumberPeople = document.querySelector(".error__numberPeople");

bill.addEventListener("input", billInput);
person.addEventListener("input", peopleInput);
tipCostum.addEventListener("input", tipInput);
resetBtn.addEventListener("click", reset);

bill.value = "0.0";
person.value = "1";
tip.innerHTML = "€" + (0.0).toFixed(2);
total.innerHTML = "€" + (0.0).toFixed(2);

// let personValue = 1;
let billValue = 0.0;
let people = 1;
let tipValue = 0.15;

// array.from(tips).foreach(e => {
// 	val.addEventListener("click", handlerEvent);
// 	console.log("deu");
// });

function billInput() {
	billValue = parseFloat(bill.value);
	calculativeTip();
}

function peopleInput() {
	people = parseFloat(person.value);
	calculativeTip();

	if (people < 1) {
		error.style.display = "flex";
		errorNumberPeople.style.border = "2px solid red";
	} else {
		error.style.display = "none";
		errorNumberPeople.style.border = "none";
	}
}

function tipInput() {
	tipValue = parseFloat(tipCostum.value / 100);

	tips.forEach(function (val) {
		val.classList.remove("active-tip");
	});
}

function selectTip() {
	tips.forEach(function (val) {
		val.addEventListener("click", event => {
			tips.forEach(function (val) {
				val.classList.remove("active-tip");
				if (event.target.innerHTML == val.innerHTML) {
					val.classList.add("active-tip");
					tipValue = parseFloat(val.innerHTML) / 100;
				}
				console.log(tipValue);
			});
		});
	});
}

function calculativeTip() {
	if (people >= 1) {
		let tipAmount = (billValue * tipValue) / people;
		let totalAmount = (billValue + tipAmount) / people;

		tip.innerHTML = "€" + parseFloat(tipAmount).toFixed(2);
		total.innerHTML = "€" + parseFloat(totalAmount).toFixed(2);
	}
}

function reset() {
	bill.value = "0.0";
	billInput();
	person.value = "1";
	peopleInput();
	tipCostum.value = "";
}

document.querySelector(".tip-calculator").addEventListener("click", e => {
	billValue = parseFloat(bill.value);
	people = parseFloat(person.value);

	selectTip();
	calculativeTip();
});

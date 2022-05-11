"use strict";

const bill = document.querySelector("#bill-input");
const person = document.querySelector(".person__input");
const tips = document.querySelectorAll(".tips");

const tip = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");
const reset = document.querySelector(".reset");

bill.value = "0.0";
person.value = "1";
tip.innerHTML = "€" + (0.0).toFixed(2);
total.innerHTML = "€" + (0.0).toFixed(2);

// let personValue = 1;
let billValue = "0.0";
let people = "1";

// array.from(tips).foreach(e => {
// 	val.addEventListener("click", handlerEvent);
// 	console.log("deu");
// });

tips.forEach(function(val) {
	val.addEventListener("click", event => {
		console.log(button.value);

		val.classList.remove("active-tip");
		if (event.target.innerHTML == button.innerHTML) {
			button.classList.add("active-tip");
		}
	});
});

document.querySelector(".tip-calculator").addEventListener("click", e => {
	billValue = parseFloat(bill.value);
	people = parseFloat(person.value);

	// console.log(billValue);
	// console.log(people);
});

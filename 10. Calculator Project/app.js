(function () {
	const calculator = document.querySelector(".calculator");
	const keys = calculator.querySelector(".buttons");
	const display = calculator.querySelector(".screen");

	let waitingSecondNumber = false;
	keys.addEventListener("click", event => {
		if (!event.target.closest("button")) return;

		const key = event.target;
		const keyValue = key.textContent;
		const displayValue = display.value;
		const { type } = key.dataset;
		const { previousKeyType } = calculator.dataset;
		const { previousKey } = calculator.dataset;

		calculator.dataset.previousKeyType = type;

		// is this is number key
		if (type === "number") {
			if (displayValue === "0" || previousKeyType === "operator") {
				display.value = keyValue;
			} else {
				display.value = displayValue === "0" ? keyValue : displayValue + keyValue;
			}

			if (previousKeyType === "operator" && waitingSecondNumber === true) {
				waitingSecondNumber = false;
				calculator.dataset.secondNumber = display.value;
			}

			if (previousKeyType === "number" && !isNaN(displayValue)) {
				calculator.dataset.firstNumber = display.value;
				waitingSecondNumber = true;
			}

			// } else {
			// 	display.value = displayValue === "0" ? keyValue : displayValue + keyValue;
			// }
		}
		// calculator.dataset.firstNumber = display.value;
		// calculator.dataset.secondNumber = display.value;

		// is this operator key
		if (type === "operator") {
			const operatorKeys = keys.querySelectorAll("[data-type='operator']");
			operatorKeys.forEach(el => {
				el.dataset.state = "";
			});

			key.dataset.state = "selected";
			waitingSecondNumber = true;
			calculator.dataset.operator = key.dataset.key;
		}

		if (type === "decimal") {
			if (!displayValue.includes(".")) {
				display.value += ".";
			}
		}

		if (type === "equal") {
			// perform calculation
			const firstNumber = parseFloat(calculator.dataset.firstNumber);
			const operator = calculator.dataset.operator;
			const secondNumber = parseFloat(calculator.dataset.secondNumber);

			var result = "";
			if (operator === "minus") {
				result = firstNumber - secondNumber;
			}
			if (operator === "times") {
				result = firstNumber * secondNumber;
			}
			if (operator === "divide") {
				result = secondNumber / firstNumber;
			}
			if (operator === "plus") {
				result = firstNumber + secondNumber;
			}

			display.value = result;
		}

		if (type === "clear") {
			display.value = "0";
			delete calculator.dataset.firstNumber;
			delete calculator.dataset.operator;
		}

		// if (previousKeyType === "equal") {
		// 	clear();
		// }
		// if ((display.value !== "0") & (type === "number")) {
		// 	calculator.dataset.firstNumber = display.value;
		// }
		// if ((display.value !== "0") & (type === "operator")) {
		// 	calculator.dataset.secondNumber = display.value;
		// }
	});
})();

// testing

// const one = document.querySelector();

//
//  1 parte write solution
// ~2 parte test solution - calc

// function calculate (firstNumber, operator, secondNumber) {
//     firstNumber = parseInt(firstNumber);
//     secondNumber = parseInt(secondNumber);

//     let result = "";
//     if (operator === "minus") result = firstNumber - secondNumber;
//     if (operator === "times") result = firstNumber * secondNumber;
//     if (operator === "divide") result = secondNumber / firstNumber;
//     if (operator === "plus") result = firstNumber + secondNumber;
//     return result;
// }

// //Wrap code in an IIFEe
// (function(){

//   let screen = document.querySelector('.screen');
//   let buttons = document.querySelectorAll('.btn');
//   let clear = document.querySelector('.btn-clear');
//   let equal = document.querySelector('.btn-equal');

//   //retrieve data from numbers that are clicked
//   buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//       let value = e.target.dataset.num;
//       screen.value += value;
//     })
//   });

//   equal.addEventListener('click', function(e){
//     if(screen.value === ''){
//       screen.value = 'Please Enter a Value';
//     } else {
//       let answer = eval(screen.value);
//       screen.value = answer;
//     }
//   })

//   clear.addEventListener('click', function(e){
//     screen.value = '';
//   })

// })(); //end iiFE

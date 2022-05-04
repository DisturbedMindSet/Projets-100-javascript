(function () {
    
   

    const calculator = document.querySelector(".calculator");
    const keys = calculator.querySelector(".buttons");
    const display = calculator.querySelector(".screen");


    keys.addEventListener("click", (event) => {
        if (!event.target.closest("button")) return;

        const key = event.target;
        const keyValue = key.textContent;
        const displayValue = display.value;
        const { type } = key.dataset;
        const { previousKeyType } = calculator.dataset;

        
        // is this is number key
        if (type === "number") {
            // type = equal depois do 1 calculo, portanto
            if (displayValue === "0" || previousKeyType === "operator"){
                display.value = keyValue;
            
            } else {
                display.value = displayValue + keyValue;
            }

        }
        // calculator.dataset.firstNumber = display.value;
        // calculator.dataset.secondNumber = display.value;


        // is this operator key
        if (type === "operator") {

            const operatorKeys = keys.querySelectorAll("[data-type='operator']");
            operatorKeys.forEach(el => { el.dataset.state = "" });

            key.dataset.state = "selected";

            calculator.dataset.firstNumber = displayValue;
            calculator.dataset.operator = key.dataset.key;
        }

        if (type === "equal") {
            // perform calculation
            const firstNumber = parseInt(calculator.dataset.firstNumber);
            const operator = calculator.dataset.operator;
            const secondNumber = parseInt(calculator.dataset.secondNumber);

            var result = "";
            if (operator === "minus"){return  firstNumber - secondNumber}
            if (operator === "times") {return firstNumber * secondNumber};
            if (operator === "divide"){ return  secondNumber / firstNumber};
            if (operator === "plus") {return  firstNumber + secondNumber};
        
            display.value = result
            
        }

        if (type === "clear"){
            displayValue= "0"
            delete calculator.dataset.firstNumber
            delete calculator.dataset.operator
        }



        calculator.dataset.previousKeyType = type;

    });

    
    
})();


// testing

const one = document.querySelector()











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
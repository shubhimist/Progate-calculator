
const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number
}


const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

const inputNumber =(number) => {
    if(currentInput==='0'){
        currentInput = number
    } else{
        currentInput += number
    }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)

    })
})

const inputOperator = (operator) => {
    prevInput=currentInput
    calculationOperator = operator
    currentInput='0'
}

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentInput)

})
let result = 0
const calculate =() => {
    
    switch(calculationOperator) {
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput)
            break        
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            break        
        case '*':
            result = parseInt(prevInput) * parseInt(currentInput)
            break    
        case '/':
            result = parseInt(prevInput) / parseInt(currentInput)
            break
        default:
            return   
    }
    currentInput=result.toString()
    calculationOperator = ''
}

const allClear = document.querySelector(".all-clear")

allClear.addEventListener('click', () => {
    prevInput = '0';
    calculationOperator = '';
    currentInput = '0';
    updateScreen(currentInput)
})

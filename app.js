const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('#result');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');

let n = '';
let opp = '';
let accumulator = 0;

clear.addEventListener('click', function() {
    n = '';
    opp = '';
    accumulator = '';
    display.innerHTML = '';
})


// If user clicks on a number, add that number to the number variable
numbers.forEach(function(number) {
    number.addEventListener('click', () =>  {
        n += number.innerText;
        display.innerHTML += number.innerHTML;
        
        console.log(n, accumulator, opp);
    });
})

// If user clicks on a operator change the operator and pass the number to the acumulator
operators.forEach(function(operator) {
    operator.addEventListener('click', () => {
        if (n != '') calculate(opp);
        n = '';
        opp = operator.innerHTML;
        display.innerHTML += ` ${opp} `;
        console.log(n, accumulator, opp);

    })
})

equal.addEventListener('click', () => {
    if (n != '') calculate(opp);
    n = '';
    display.innerHTML = accumulator;
    console.log(n, accumulator, opp);

})

function calculate(opp) {
    switch(opp) {
        case '-':
            accumulator -= parseFloat(n);
            break;
        case '+':
            accumulator += parseFloat(n);
            break;
        case '/':
            accumulator /= parseFloat(n);
            break;
        case '*':
            accumulator *= parseFloat(n);
            break;
        default:
            accumulator = parseFloat(n);
    }
}

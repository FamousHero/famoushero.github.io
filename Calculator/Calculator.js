/* Variables */
var answer = 0;
var currentCalc = NaN;
var prevAnswer = answer;
var operators = document.querySelectorAll(".button.operator");
var display = document.getElementById('display');
var buttons = document.getElementsByClassName("button");
var solve = document.getElementById('solve');
var decimalButton = document.getElementById('decimal');
var clear = false;
var decimal =false;
var depth = 0;
var operationToDo = '';
operators.forEach(operator=>{
    operator.addEventListener('click', ()=>{preformOperation(operator.value)});
});
solve.addEventListener('click', solveEquation);
decimalButton.addEventListener('click', ()=>{decimal = true;});
[...buttons].forEach(button=>{
    if(!button.classList.contains('operator'))
        {button.addEventListener('click', ()=>{
            if(clear)
            {
                clear = !clear;
                display.value = '';
            }
            let numToAdd = parseInt(button.value);
            if(decimal)
            {
                numToAdd = '0.'+'0'.repeat(depth) + numToAdd;
                numToAdd = parseFloat(numToAdd);
                ++depth;
            }
            let displayVal = parseFloat(display.value);
            displayVal = isNaN(displayVal)? 0: displayVal;
            displayVal = parseFloat((displayVal + numToAdd).toFixed(depth));
            display.value =displayVal;
        })
    }
})
console.log("finished");

function preformOperation(operation)
{
    if(operation == '.')
    {
        decimal = true;
        return;
    }
    let valueCheck = parseFloat(display.value);
    console.log(`value is: ${valueCheck}`);
    if(isNaN(currentCalc))
        currentCalc = valueCheck;
    if(!isNaN(valueCheck) && operationToDo)
    {
        let fixedPoint = max
        switch(operationToDo)
        {
            case('/'):{currentCalc /= valueCheck; break;}
            case('*'):{currentCalc *= valueCheck; break;}
            case('-'):{currentCalc -= valueCheck;  break;}
            case('+'):{currentCalc += valueCheck;  break;}
            case('+/-'):{currentCalc *= -1; break;}

        }
        
    }
    clear = true;
    decimal = false;
    depth = 0;
    display.value = currentCalc;
    operationToDo = operation;
    console.log(currentCalc);
}

function solveEquation()
{
    preformOperation('');
    currentCalc=NaN; 
}
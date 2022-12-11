/* Variables */
var answer = 0;
var currentCalc = NaN;
var prevAnswer = answer;
var operators = document.querySelectorAll("[data-operator]");
var display = document.getElementById('display');
var numbers = document.querySelectorAll("[data-number]");
var solve = document.getElementById('solve');
var decimalButton = document.getElementById('decimal');
var clear = false;
var decimal =false;
var depth = 0;
var operationToDo = '';
var operatorList = ['*', '/', '+', '-'];

/* Page Setup */

    /* Operator Setup */
operators.forEach(operator=>{
    operator.addEventListener('click', ()=>{
        if(display.value !== ''){
        preformOperation(operator.innerText)
        }
    });
});
    /* Equal Setup */
solve.addEventListener('click', solveEquation);
    /* Decimal Setup */
decimalButton.addEventListener('click', ()=>{decimal = true;});
    /* Number Setup */
[...numbers].forEach(number=>{
    if(!number.classList.contains('operator'))
        {number.addEventListener('click', ()=>{
            if(clear)
            {
                clear = !clear;
                display.value = '';
            }
            let numToAdd = number.innerText;
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

    /* Keypad Setup */
document.onkeyup = (e)=>{
    if(operatorList.includes(e.key) && display.value !== '')
        preformOperation(e.key);
    else if(e.key === 'Enter')
        solveEquation();

}
document.onkeydown = ()=>
{
    if(clear)
    {
        clear = !clear;
        display.value = '';
    }
}
display.addEventListener('keypress',(e)=>{
    if(e.key === '+' || e.key === '-')
        e.preventDefault();
})

/* Functions */
function preformOperation(operation)
{
    if(operation == '.')
    {
        decimal = true;
        return;
    }
    let valueCheck = parseFloat(display.value);
    if(isNaN(valueCheck))
    {
        return;
    }
    console.log(`value is: ${valueCheck}`);
    if(isNaN(currentCalc))
        currentCalc = valueCheck;
    if(!isNaN(valueCheck) && operationToDo)
    {
        let fixedPoint = currentCalc.toString().split('.');
        fixedPoint = (fixedPoint.length > 1)? fixedPoint[1].length: 0;
        let valueCheckDec = valueCheck.toString().split('.');
        if(valueCheckDec.length > 1)
            fixedPoint = Math.max(fixedPoint, valueCheckDec[1].length);
        switch(operationToDo)
        {
            case('/'):{currentCalc /= valueCheck; break;}
            case('*'):{currentCalc *= valueCheck; break;}
            case('-'):{currentCalc -= valueCheck;  break;}
            case('+'):{currentCalc += valueCheck;  break;}
            case('+/-'):{currentCalc *= -1; break;}

        }
        currentCalc = parseFloat(currentCalc.toFixed(isNaN(fixedPoint)?0:fixedPoint));
        
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
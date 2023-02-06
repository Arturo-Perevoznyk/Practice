// THIS IS WHAT THE USER SEES IN THE SCREEN
let textOnScreen = document.querySelector('.screen p');
textOnScreen.innerHTML = "";

// THIS IS WHAT THE PROGRAM SEES: an array wiht the numbers and the operations, without spaces.
let innerExpression = [];

// Function that adds something to the text of the screen
function addToScreen(newData) {
    textOnScreen.innerHTML += newData;
}

function updateInnerExpression() {
    innerExpression = textOnScreen.innerHTML.split(' ');
    innerExpression = clearWhiteSpaces(innerExpression);
}

function clearWhiteSpaces(arr) {
    return arr.filter(word => word.length > 0);
}

// OPERATION BUTTONS DECLARATION
const reset = document.querySelector('.reset');
const coma = document.querySelector('.coma');
const equal = document.querySelector('.equal');
const pluss = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const split = document.querySelector('.split');
const multiply = document.querySelector('.multiply');
const deletee = document.querySelector('.delete');

// NUMBERS AND COMA
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
// ARRAY WITH ALL NUMBERS AND COMA
numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

// ASSIGN TO EVERY NUMBER AN EVENT LISTENER TO BE DISPLAYED ON SCREEN
numbers.forEach(number => {
    number.addEventListener('click', () => {
        addToScreen(number.innerHTML);
        updateInnerExpression();
        //////////  TO TEST  //////////////
        // console.log(`Last innerExpression was supposed to be : ${innerExpression[innerExpression.length - 1]}`);
        // console.log(`Inner expresion is currently: ${innerExpression}`)
        // console.log(`The innerHTML has this length: ${textOnScreen.innerHTML.length}`)
    })
});

// PROGRAM THE COMA
coma.addEventListener('click', () => {
    let lastNumber = innerExpression[innerExpression.length - 1];
    if ((lastNumber * 1) >= 0) {
        if ((lastNumber[(lastNumber.length - 1)] != '.')
            && (lastNumber.includes('.') == false)) {
            addToScreen('.');
            updateInnerExpression();
        }
    }
})

//  PROGRAM OPERATION BUTTONS

function cleanEverything() {
    textOnScreen.innerHTML = '';
    innerExpression = [];
}

reset.addEventListener('click', () => {
    cleanEverything();
})

pluss.addEventListener('click', () => {
    if ((innerExpression[innerExpression.length - 1] != '+')
        && (innerExpression[innerExpression.length - 1] != '-')
        && (innerExpression[innerExpression.length - 1] != '/')
        && (innerExpression[innerExpression.length - 1] != 'x')
        && (innerExpression.length > 0)) {
        addToScreen(' + ');
        updateInnerExpression();
    }
})

multiply.addEventListener('click', () => {
    if ((innerExpression[innerExpression.length - 1] != '+')
        && (innerExpression[innerExpression.length - 1] != '-')
        && (innerExpression[innerExpression.length - 1] != '/')
        && (innerExpression[innerExpression.length - 1] != 'x')
        && (innerExpression.length > 0)) {
        addToScreen(' x ');
        updateInnerExpression();
    }
})

minus.addEventListener('click', () => {
    if ((innerExpression[innerExpression.length - 1] != '+')
        && (innerExpression[innerExpression.length - 1] != '-')
        && (innerExpression[innerExpression.length - 1] != '/')
        && (innerExpression[innerExpression.length - 1] != 'x')) {
        //WARNING: this is the only operator that can be typed without number (in an empty screen). The reason is to allow to start with a negative number.
        //this is going to be a struggle when trying to program the '=' button.
        addToScreen(' - ');
        updateInnerExpression();
    }
})

split.addEventListener('click', () => {
    if ((innerExpression[innerExpression.length - 1] != '+')
        && (innerExpression[innerExpression.length - 1] != '-')
        && (innerExpression[innerExpression.length - 1] != '/')
        && (innerExpression[innerExpression.length - 1] != 'x')
        && (innerExpression.length > 0)) {
        addToScreen(' / ');
        updateInnerExpression();
    }
})

deletee.addEventListener('click', () => {
    const deleteLastChar = () => textOnScreen.innerHTML = textOnScreen.innerHTML.slice(0, -1);
    if (textOnScreen.innerHTML.length > 0) {
        if (textOnScreen.innerHTML[textOnScreen.innerHTML.length - 1] === ' ') {
            deleteLastChar();
            deleteLastChar();
            deleteLastChar();
        } else {
            deleteLastChar()
        }
    } else {
        cleanEverything();
    }
    updateInnerExpression();
})

equal.addEventListener('click', () => {
    if (isAnOperator(innerExpression[innerExpression.length - 1]) == true) {
        //If the array ends with an operator, throws and error and the operation can´t be done
        window.alert('ERROR: finish the damn operation or take off the las operator.')
    } else if (innerExpression.length >= 3) { //Evaluates if the operation is worth doing (only if it has two/more numbers in it)
        if (innerExpression[0] === '-') { //If the array starts with the minus, it takes it off and transforms the second number to a negative one.
            innerExpression[1] = `-${innerExpression[1]}`;
            innerExpression.shift();
        }
        //Now, with this two last verifications, we know that the array has a secure pattern to operate with like ['2','x','4'] or ['-4.2','+','2.01','/','2']
        solveAllMultiplications(innerExpression); //Solves the multiplications
        solveAllDivisions(innerExpression); //Solves de divisions
        solveAllAdditions(innerExpression); // Does the sums
        solveAllSubstractions(innerExpression); //Does the substractions
        if ((innerExpression == Infinity) || (innerExpression == -Infinity) || (innerExpression === 'NaN')){ //NEED TO BE SOLVED: the NaN is not working
            // textOnScreen.innerHTML = "That's stupid, BITCH!";
            textOnScreen.innerHTML = "No se puede, GILIPOLLAS!";
        } else {
        console.log(`${innerExpression}`)
        textOnScreen.innerHTML = innerExpression;
        }
    }
    if ((innerExpression.length == 1) && (textOnScreen.innerHTML[textOnScreen.innerHTML.length - 1] === '.')) {
        textOnScreen.innerHTML =  textOnScreen.innerHTML.slice(0, -1);
    }
})

// const numbers = document.getElementsByClassName('.number');
// numbers.forEach(number => {  DOESN´T WORK BECAUSE .getElementsByClassName() returns an HTMLCollection, not an array
//     number.addEventListener('click', () => {
//         textOnScreen.innerHTML += 'PUTA';
//     })
// });

function isAnOperator(thing) {
    switch (thing) {
        case '+':
            return true;
            break;
        case '-':
            return true;
            break;
        case '/':
            return true;
            break;
        case 'x':
            return true;
            break;
        default:
            return false;
    }
}

function solveAllMultiplications(arr) { //BE CAREFULL! This function only solves multiplications. The returned arr could have other operations left.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            let a = solveMultiplication(arr[i - 1], arr[i + 1]);
            arr.splice(i - 1, 3, a);
            i--;
        }
    }
    return arr;
}

function solveAllDivisions(arr) { //BE CAREFULL! This function only solves divisions. The returned arr could have other operations left.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '/') {
            let a = solveDivision(arr[i - 1], arr[i + 1]);
            arr.splice(i - 1, 3, a);
            i--;
        }
    }
    return arr;
}

function solveAllAdditions(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '+') {
            let a = solveAddition(arr[i - 1], arr[i + 1]);
            arr.splice(i - 1, 3, a);
            i--;
        }
    }
    return arr;
}

function solveAllSubstractions(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '-') {
            let a = solveSubstraction(arr[i - 1], arr[i + 1]);
            arr.splice(i - 1, 3, a);
            i--;
        }
    }
    return arr;
}

function solveMultiplication(num1, num2) { //This function takes 2 number in string form and returns the multiplication as a number
    function countDecimals(aNumber) {
        let numOfDecimals = 0;
        for (let i = 0; i < aNumber.length; i++) {
            if (aNumber[i] == '.') {
                numOfDecimals = aNumber.length - i - 1;
            }
        }
        return numOfDecimals;
    }
    const totalDecimals = countDecimals(num1) + countDecimals(num2);
    let result = (num1 * num2).toFixed(totalDecimals);
    return result;
}

function solveDivision(num1, num2) { //This function takes 2 number in string form and returns the division as a number.
    // As decimals in a division could be infinite, the decimals that the result will have are the decimals that the number has + 2 (in case there is no decimal)
    // Example: 1/2 returns 0.50
    function countDecimals(aNumber) {
        let numOfDecimals = 0;
        for (let i = 0; i < aNumber.length; i++) {
            if (aNumber[i] == '.') {
                numOfDecimals = aNumber.length - i - 1;
            }
        }
        return numOfDecimals;
    }
    const numberWithMoreDecimals = countDecimals(num1) > countDecimals(num2) ? countDecimals(num1) : countDecimals(num2);
    let result = (num1 / num2).toFixed(numberWithMoreDecimals + 2);
    return result;
}

function solveAddition(num1, num2) {
    return Number(num1) + Number(num2);
}

function solveSubstraction(num1, num2) {
    return Number(num1) - Number(num2);
}


/////////////////////////////////////////////
//PROBLEMS OR BUGS THAT I NEED TO WORK ON

// equal.addEventListener -> || (innerExpression === 'NaN'))

// If the screen overflows, you can't see what you are typing because it moves to the right. 

let textOnScreen = document.querySelector('.screen p');

// THIS IS WHAT THE USER SEES IN THE SCREEN
// textOnScreen.innerHTML = "I'm your slutty machine!";
textOnScreen.innerHTML = "8 + ";

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

    //TO TEST
    console.log(`Last innerExpression was supposed to be : ${innerExpression[innerExpression.length - 1]}`);
     console.log(`Inner expresion is currently: ${innerExpression}`)
     console.log(`The innerHTML has this length: ${textOnScreen.innerHTML.length}`)
    })
});

// PROGRAM THE COMA
coma.addEventListener('click',  () => {
    let lastNumber = innerExpression[innerExpression.length -1];
      if ((lastNumber * 1) >= 0) {
         if ((lastNumber[(lastNumber.length - 1)] != '.')
            && (lastNumber.includes('.') == false)) {
            addToScreen('.');
            updateInnerExpression();
         }
}})

//  PROGRAM OPERATION BUTTONS

function cleanEverything () {
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

function isAnOperator (thing) {
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

equal.addEventListener('click', () => {
    if (isAnOperator(innerExpression[innerExpression.length - 1]) == true) {
        //If the array ends with an operator, throws and error and the operation can´t be done
        window.alert('ERROR: Please finish the operation or take off the las operator.')
        } else if (innerExpression.length >= 3) { //Evaluates if the operation is worth doing (only if it has two/more numbers in it)
        if (innerExpression[0] === '-') { //If the array starts with the minus, it takes it off and transforms the second number to a negative one.
            innerExpression[1] = `-${innerExpression[1]}`;
            innerExpression.shift();
        }
        //Now, with this two last verifications, we know that the array has a secure pattern to operate with like ['2','x','4'] or ['4.2','+','2.01','/','2']
        let result = innerExpression.shift(); //stores the first number and removes it.
        while (innerExpression.length >= 2) {
            let operator = innerExpression.shift();
            let number = innerExpression.shift();
            
        }
    }
    })


// const numbers = document.getElementsByClassName('.number');
// numbers.forEach(number => {  DOESN´T WORK BECAUSE .getElementsByClassName() returns an HTMLCollection, not an array
//     number.addEventListener('click', () => {
    //         textOnScreen.innerHTML += 'PUTA';
    //     })
    // });
    
    // const transformStringToArray = (str) => {
        //     const arr = [];
        //     for (let i = 0; i < str.length; i++) {
            //         arr.push(str[i]);
//     }
//     return arr;
// }

// let a = '22.'
// let b = a * 1;

// INTERESTING FACT: typeof NaN (stands for Not a Number) is actually a 'number' 
// console.log('-' * 1) PRINTS NaN
// console.log(typeof NaN) PRINTS NUMBER


// if (typeof (innerExpression[innerExpression.length -1] * 1) === 'number') {
    //     console.log('Im a NUMBER BITCH')
    //     if (innerExpression[innerExpression.length -1][

        // }
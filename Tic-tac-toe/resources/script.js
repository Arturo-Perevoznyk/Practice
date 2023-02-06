//PROBLEM NOW: You can click in the same square (only works two times, though) and the computer will move anyway. This has something to do 
//with the bubbling thing -about I now nothing yet- so I will put this on hold till I understand how it works.
// See https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli

// MENU BUTTONS
const reset = document.getElementById('reset');
const start = document.getElementById('start')


// Could this code below be automatized?
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');
const E = document.getElementById('E');
const F = document.getElementById('F');
const G = document.getElementById('G');
const H = document.getElementById('H');
const I = document.getElementById('I');

let squares = [A, B, C, D, E, F, G, H, I];

let humanPossibleWinnings = [[A, B, C], [D, E, F], [G, H, I], [A, D, G], [B, E, H], [C, F, I], [A, E, I], [C, E, G]];
let computerPossibleWinnings = [[A, B, C], [D, E, F], [G, H, I], [A, D, G], [B, E, H], [C, F, I], [A, E, I], [C, E, G]];
// let computerPossibleWinnings = [[A, B, C],[G, H, I], [A, D, G], [C, F, I]];
let possibilitiesToCheckIfSomeoneWon = [[A, B, C], [D, E, F], [G, H, I], [A, D, G], [B, E, H], [C, F, I], [A, E, I], [C, E, G]];
// let rows = [[A, B, C], [D, E, F], [G, H, I]];
// let columns = [[A, D, G], [B, E, H], [C, F, I]];
// let diagonals = [[A, E, I], [C, E, G]];

let hasGameStarted = true; //This sould be set to FALSE once the program is finished.
let tokens = ['circle', 'cross']
let mode = 'normal';

function setNewGame() {
    humanToken = tokens[Math.floor(Math.random() * 2)];
    computerToken = humanToken === 'cross' ? 'circle' : 'cross';
    humanTurn = Math.floor(Math.random() * 2) == 1 ? true : false;
    computerTurn = humanTurn == true ? false : true;
}

let humanToken;   //'Circle' or 'cross'
let computerToken;//'Circle' or 'cross'
let humanTurn;    // True or false
let computerTurn; // True or false  

setNewGame();

// console.log(computerTurn + 'is computer turn')

if (computerTurn == true) {
    // computerPlays();  // ON HOLD TILL FINISHED
}

function changeplayerToPlay() {
    humanTurn == true ? humanTurn = false : humanTurn = true;
    computerTurn == true ? humanTurn = false : humanTurn = true;
}

squares.forEach((square) => {
    square.addEventListener('click', (event) => {
        if (hasGameStarted == true) {
            if (humanTurn == true) {
                if (event.target.hasChildNodes() == false) {
                    console.log(`(HUMAN) This square is empty: ${event.target.hasChildNodes() == false}`)
                    if (humanToken == 'cross') {
                        let cross = document.createElement('img');
                        cross.src = './resources/cross.png';
                        event.target.appendChild(cross);
                    } else if (humanToken == 'circle') {
                        let circle = document.createElement('img');
                        circle.src = './resources/circle.png';
                        event.target.appendChild(circle);
                    }
                    console.log(`(HUMAN, AFTER MOVING) This square is empty: ${event.target.hasChildNodes() == false}`)
                    // console.log(computerPossibleWinnings + 'before')
                    removeOponentPossibilities(event.target) //STILL DOESN'T WORK!!!!!!!!!!!!!!!!! *********************NEXT TO FIX
                    console.log(`Now oponentsPossibilities are: ${computerPossibleWinnings.map(possibility => possibility.map(letter => letter.id) + '//')}`)
                    changeplayerToPlay();
                    // console.log(computerPossibleWinnings + 'after')
                    computerPlays();
                } else if (event.target.hasChildNodes() == true) {
                    console.log('It has a child!!!!!!!!!!!')
                }
            }
        }
    })
    square.numberOfOptions = 0;
    // square.hasToken = false; //This will be a property in a quare to tell if it is empty or not.
})

const computerPlays = () => { //ComputerPlays is only called when the game starts (if it turn for computer) or after the human plays
    if (mode == 'retarded') {
    } else if (mode == 'easy') {
    } else if (mode == 'normal') {

        let placetoPut = findBestOption(computerPossibleWinnings); //Finds the best winning square
        console.log(`PlaceToPut is ${placetoPut.id}`)
        console.log(`(COMPUTER) This square is empty: ${placetoPut.hasChildNodes() == false}`)
        if (computerToken == 'cross') {
            let cross = document.createElement('img');
            cross.src = './resources/cross.png';
            placetoPut.appendChild(cross);
        } else if (computerToken == 'circle') {
            let circle = document.createElement('img');
            circle.src = './resources/circle.png';
            placetoPut.appendChild(circle);
        }
        console.log(`(COMPUTER, AFTER MOVING) This square is empty: ${placetoPut.hasChildNodes() == false}`)
    }
}

function findBestOption(arrPossibleWinnnings) {
    let emptySquares = squares.filter(spq => spq.hasChildNodes() === false); //Stores empty squares
    console.log(`These are supposed to be only free squares: ${emptySquares.map(thing => thing.id)}`)
    emptySquares.forEach(letter => {
        countOptions(arrPossibleWinnnings, letter);
    })
    //Maybe this will block squares that already have a token
    let allPossibleLetters = emptySquares.filter(lett => lett.numberOfOptions > 0); // Now we have all the squares that are an option for winning.
    console.log('AllPossibleletters: ' + allPossibleLetters.map(thing => thing.id))
    let higherOptionNumber = 0;
    let bestOption;
    allPossibleLetters.forEach(letter => {
        if (letter.numberOfOptions > higherOptionNumber) {
            higherOptionNumber = letter.numberOfOptions;
            bestOption = letter;
        }
    })
    emptySquares.forEach(letter => letter.numberOfOptions = 0) //This resets numberOfOptions so it is not contaminated for the next player
    return bestOption;
}

function countOptions(arrPossibleWinnnings, letter) {
    arrPossibleWinnnings.forEach(arr => {
        arr.forEach((char) => {
            char === letter ? letter.numberOfOptions++ : null;
        })
    })
}

//If a player played 'A', removes from the opponent all the possibilities that have the letter 'A'
function removeOponentPossibilities(letter) {
    if (humanTurn == true) {
        computerPossibleWinnings = computerPossibleWinnings.filter(possibility => possibility.some(lett => lett == letter) ? false : true);
    }
    if (computerTurn == true) {
        humanPossibleWinnings = humanPossibleWinnings.filter(possibility => possibility.some(lett => lett == letter) ? false : true);
    }
}

//Just to test possibilities of winning
// let possibleWinnings = [[A, B, C], [G, H, I], [A, D, G], [C, F, I]];
// console.log(removeOponentPossibilities(possibleWinnings, A))
// removeOponentPossibilities(possibleWinnings, A);
// console.log(possibleWinnings);


// Reset removes all the child 
reset.addEventListener('click', () => {
    squares.forEach((element) => {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    })
    setNewGame();
})

start.addEventListener('click', () => {
    hasGameStarted = true;
})

// function checkIfSomeoneWon() {       //NEED TO CHECK IF THIS WORKS!!!!!
//     possibilitiesToCheckIfSomeoneWon.forEach(arr => {
//         if (arr[0].firstChild.name == arr[1].firstChild.name == arr[2].firstChild.name) {
//             console.log(`THE WINNER IS... ${arr[0].firstChild.name}!!`);
//         }
//     })
// }


// console.log('It has options: ' + A.numberOfOptions + ' ' + B.numberOfOptions)

// JUST TO TEXT
// let arrToTest = [[G, H, I]];

// let winner = findBestOption(arrToTest)
// winner.style.backgroundColor = 'red';

// console.log(`Best option is ${winner}`)
// console.log('asañlkj')

// const solution = squares.filter(letter => letter.hasChildNodes == false);
// console.log('These squares should be empty:' + solution)
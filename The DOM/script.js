/*The variables*/
let man = document.getElementById('man');
let woman = document.getElementById('woman');
let weirdo = document.getElementById('weirdo');

let manPicture = document.getElementById('manPicture');
let womanPicture = document.getElementById('womanPicture');
let weirdoPicture = document.getElementById('weirdoPicture');

let resetButton = document.getElementById('reset-button')

/*The functions*/
function showManDuties() {
    woman.style.visibility = 'hidden';
    weirdo.style.visibility = 'hidden';
    manPicture.style.display = 'block';
}
function showWomanDuties() {
    man.style.visibility = 'hidden';
    weirdo.style.visibility = 'hidden';
    womanPicture.style.display = 'block';
}
function showWeirdoDuties() {
    woman.style.visibility = 'hidden';
    man.style.visibility = 'hidden';
    weirdoPicture.style.display = 'block';
}
function resetEverything() {
    weirdoPicture.style.display = 'none';
    manPicture.style.display = 'none';
    womanPicture.style.display = 'none';

    woman.style.visibility = 'visible';
    man.style.visibility = 'visible';
    weirdo.style.visibility = 'visible';
}

/*The fun part*/
man.addEventListener('click', showManDuties);
woman.addEventListener('click', showWomanDuties);
weirdo.addEventListener('click', showWeirdoDuties);
resetButton.addEventListener('click', resetEverything);
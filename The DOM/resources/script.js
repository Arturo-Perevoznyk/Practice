// // /*The variables*/
let man = document.getElementById('man');
let woman = document.getElementById('woman');
let weirdo = document.getElementById('weirdo');

let manPicture = document.getElementById('manPicture');
let womanPicture = document.getElementById('womanPicture');
let weirdoPicture = document.getElementById('weirdoPicture');

let resetButton = document.getElementById('reset-button')

/*The functions*/
function showManDuties() {
    woman.style.opacity = '0';
    weirdo.style.opacity = '0';
    manPicture.style.display = 'block';
}
function showWomanDuties() {
    man.style.opacity = '0';
    weirdo.style.opacity = '0';
    womanPicture.style.display = 'block';
}
function showWeirdoDuties() {
    woman.style.opacity = '0';
    man.style.opacity = '0';
    weirdoPicture.style.display = 'block';
}
function resetEverything() {
    weirdoPicture.style.display = 'none';
    manPicture.style.display = 'none';
    womanPicture.style.display = 'none';

    woman.style.opacity = '1';
    man.style.opacity = '1';
    weirdo.style.opacity = '1';
}

/*The fun part*/
man.addEventListener('click', showManDuties);
woman.addEventListener('click', showWomanDuties);
weirdo.addEventListener('click', showWeirdoDuties);
resetButton.addEventListener('click', resetEverything);
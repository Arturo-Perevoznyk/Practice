const button = document.getElementById('button')

button.addEventListener('click', () => {
    const newColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    button.style.backgroundColor = newColor;
})
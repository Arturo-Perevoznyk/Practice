let wordToSend = 'help'

const content = document.querySelector('.content')

const arrayOfWords = [];

fetch(`https://api.datamuse.com/words?rel_rhy=${wordToSend}`)
    .then(response => {
        if (response.ok) return response.json();
        throw new Error('Error with the JSON, BITCH!')
    }, networkError => console.log(networkError))
    .then(arr => {
        console.log(arr)
        arr.forEach(obj => {
            arrayOfWords.push(obj.word)
        });
        arrayOfWords.forEach(word => {
            const newWord = document.createElement('p')
            newWord.innerHTML = word;
            content.appendChild(newWord)
        })
    }).then(() => {
        console.log(content.firstChild)
    })



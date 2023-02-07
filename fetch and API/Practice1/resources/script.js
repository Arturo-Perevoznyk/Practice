// For now, it only works typing the word into the input file and clicking the button after that. It doesn´t work if you press ENTER though.

const content = document.querySelector('.content')
const input = document.getElementById('input');
const button = document.getElementById('button')



button.addEventListener('click', () => {
    removeAllChilds(content) // Cleans the content from the previous search
    findResults(input.value)
})

const arrayOfWords = [];

const findResults = wordToSend => {
    fetch(`https://api.datamuse.com/words?rel_rhy=${wordToSend}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Error with the JSON, FUCKER!');
        }, networkError => console.log(networkError))
        .then(arr => {
            if (arr.length == 0) throw new Error(`No rhyme for "${wordToSend}"! :(`);

            arr.forEach(obj => arrayOfWords.push(obj.word));
            const phrase = document.createElement('h3') //Style is added in style.css
            phrase.innerHTML = `Words that rhymes with "${wordToSend}"`;
            content.appendChild(phrase);
            arrayOfWords.forEach(word => {
                const newWord = document.createElement('p');
                newWord.innerHTML = word;
                content.appendChild(newWord)
            })
        }).catch(error => {
            const errorPhrase = document.createElement('p');
            errorPhrase.innerHTML = error;
            content.appendChild(errorPhrase)
        })
        while (arrayOfWords[0]) arrayOfWords.pop(); // TO EMPTY THE ARRAY
}

const removeAllChilds = parent => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild)
    }
}


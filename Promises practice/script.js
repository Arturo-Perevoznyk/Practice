function job(data) {
    return new Promise((resolve, rejected) => {
        if (data) resolve('The word is ' + data);
        throw new Error('Hello! Im the Error')
})}

job('')
.then(message => console.log(message))
//  message => console.log('This is the catch message: ' + message))
.catch(e => console.log(e))

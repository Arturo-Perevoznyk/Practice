const task = new Promise( function(resolve, reject) {
    setTimeout(() => {
        const trueFalse = [true, false];
        const result = trueFalse[Math.floor(Math.random()*2)];
        result ? resolve("You're a winner!") : reject("You're a loser!");
    }, 1000);
})

task.then(result => console.log(result))
.catch(result => {
    console.log(result);
    return new Promise ( function(resolve, reject) {
        setTimeout(() => {
            const trueFalse = [true, false];
            const result = trueFalse[Math.floor(Math.random()*2)];
            result ? resolve("This time... You're a winner!") : reject("This time... You're a loser!");
        }, 1000);
    })
})
.then(null, thing => console.log(thing))

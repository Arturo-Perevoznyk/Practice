function job(data) {
    return new Promise((resolve, rejected) => {
        if (typeof data !== 'number') {
            rejected('error');
        } else if (data%2 == 1) {
            setTimeout(() => resolve('odd'), 1000);
        } else if (data%2 == 0){
            setTimeout(() => resolve('even'), 2000);
        }
    })
}

job('asea')
    .then(message => console.log(message))
    .catch(message => console.log(message))
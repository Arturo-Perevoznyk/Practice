let obj = {
    name: 'Sam',
    height: 179,
    eatsTooMuch: true
}

console.log('Original object: ' + obj)

let jsonObj = JSON.stringify(obj);

console.log('Object after JSON.stringify(): ' + jsonObj)

obj = JSON.parse(jsonObj)

console.log('Back again: ' + obj)
function Rectangle(x,y) {
    this.x = x;
    this.y = y;
}


console.log(Object.prototype)


Rectangle.prototype.perimeter = function() {
    return 2 * (this.x + this.y)
}

const rect = new Rectangle(1,2)
console.log(rect)

const array = ['yes', true, 32]
console.log(array)

const letter = 'a';
console.log(letter)
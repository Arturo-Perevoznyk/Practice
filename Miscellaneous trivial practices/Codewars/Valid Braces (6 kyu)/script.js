// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// What is considered Valid?

// A string of braces is considered valid if all braces are matched with the correct brace.
// Examples

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


function validBraces(braces){

    const arr = braces.split('');
    
    arr.forEach((element, index, array) => {
      switch (element) {
          case '(':
            const newArr = array.slice(index)9
            const indexOfInverted = newArr.findIndex(elem => elem === ')');
            if (indexOfInverted >= 0) {
                array.splice(index, 1)
                newArr
            }

          case '[':
          case '{':
      }
    })
  }

// console.log(validBraces('(())'))

// const arr = ['a', 'b', 'c']
// arr.forEach((element, index, array) => {
//     if (element === 'a') {
//         array.splice(index, 1, 'nuevo')
//     }
// })
// console.log(arr)
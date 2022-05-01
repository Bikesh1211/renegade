function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return `The First Non Repeating Character Is "${c}" and is found at ${string.indexOf(c)}`
        
    //   return c;
    }
  }
  return null;
}

let firstChar = firstNonRepeatedCharacter('abcdcaf')
console.log(firstChar)



// let indexOfChar = string.indexOf()
// console.log(firstNonRepeatedCharacter('abcdcaf'))

// let firstChar = firstNonRepeatedCharacter('abcdcaf')



// console.log(`The First None Repeating Character is ${firstChar} and is found at index ${firstCharIndex}`)




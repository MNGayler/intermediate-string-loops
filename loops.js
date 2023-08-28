/*
Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists
 of a character immediately followed by the number of times it appears in the "uncompressed" form. The function
  should return the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type.
 For example. Number("4") // => 4

You may assume that the number of times will always be an integer between 0 and 9
*/

// function uncompress(string) {
//   let decompressed = "";
//   //go throught string
//   for (let i = 0; i < string.length; i += 2) {
//     for (j = 0; j < Number(string[i + 1]); j++) {
//       decompressed += string[i];
//     }
//   }
//   return decompressed;
// }

// console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

//Write a function tripletTrue that accepts a string as an argument. The function should return a
//boolean indicating whether or not the the string contains three of the same character consecutively

// function tripletTrue(string) {
//   largestCount = 0;
//   currentCount = 1;
//   // start at second and compare to first, then continue
//   for (let i = 1; i <= string.length; i++) {
//     if (string[i] === string[i - 1]) {
//       currentCount++;
//     } else {
//       if (currentCount > largestCount) {
//         largestCount = currentCount;
//         currentCount = 1;
//       }
//     }
//   }
//   return (largestCount >= 3);
// }

// console.log(tripletTrue("caaabb")); // true
// console.log(tripletTrue("terrrrrible")); // true
// console.log(tripletTrue('runninggg'));     // true
// console.log(tripletTrue('bootcamp'));      // false
// console.log(tripletTrue('e'));             // false

//Write a function sillyString that accepts a word as an argument. The functions should return a new word where
// every vowel of the original word is followed by 'b' and that same vowel. For example, 'siren' would turn into
// 'sibireben'.

// function sillyString(word){
//     let vowels = "aeiou";
//     let newString = "";
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.indexOf(word[i]) < 0 ){
//             newString += word[i];
//         }else{
//             newString += word[i];
//             newString += "b" + word[i];
//         }
//     }
//     return newString;
// }

// console.log(sillyString('stop'));       // stobop
// console.log(sillyString('that'));       // thabat
// console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
// console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber

//Write a function moreDotLessDash that accepts a string as an argument. The function should return a
// boolean indicating whether or not the string contains more dots (.) than dashes (-).

// function moreDotLessDash(string) {
//   let dots = 0;
//   let dashes = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "."){
//         dots++
//     }
//     if (string[i] === "-"){
//         dashes++
//     }

//   }
//   return dots > dashes;
// }
// console.log(moreDotLessDash("2-D arrays are fun. I think.")); // true
// console.log(moreDotLessDash("Morse code is great.")); // true
// console.log(moreDotLessDash(".... . -.--")); // true
// console.log(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")); // false
// console.log(moreDotLessDash("high-flying acrobat.")); // false

//Write a function hasThreeVowels that accepts a string as an argument. The function should return a
// boolean indicating whether or not the string contains at least three different vowels.
// function hasThreeVowels(word){
//     let As = 0;
//     let Es = 0;
//     let Is = 0;
//     let Os = 0;
//     let Us = 0;
//     let vowels = 'aeiou';
//     for ( let i = 0; i < word.length; i++) {
//         if (vowels.indexOf(word[i]) >= 0){
//             if (word[i] === "a"){As = 1}
//             else if  (word[i] === "e"){Es = 1}
//             else if  (word[i] === "i"){Is = 1 }
//             else if  (word[i] === "o"){Os = 1}
//             else {Us = 1}
//         }
//     }
//     return ((As+Es+Is+Os+Us) >= 3)
// }

// console.log(hasThreeVowels('delicious'));       //  true
// console.log(hasThreeVowels('bootcamp prep'));   //  true
// console.log(hasThreeVowels('bootcamp'));        //  false
// console.log(hasThreeVowels('dog'));             //  false
// console.log(hasThreeVowels('go home'));         //  false

//Write a function lastIndex that takes in a string and a character. The function should return the
// last index where the character can be found in the string.

// function lastIndex(str, char) {
//   let lastFound = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       lastFound = i;
//     }
//   }
//   return lastFound;
// }

// console.log(lastIndex("abca", "a")); // 3
// console.log(lastIndex("mississipi", "i"))  // 9
// console.log(lastIndex("octagon", "o"))     // 5
// console.log(lastIndex("programming", "m")) // 7

//Write a function doubleLetterCount that takes in a string and returns the number
// of times that the same letter repeats twice in a row.

//
//Write a method caesarCipher that takes in a string and a number. The function should return a new
// string where every character of the original is shifted num characters in the alphabet.
// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

// function caesarCipher(string, num) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let cypherText = "";
//   //find char location in alphabet
//   for (let i = 0; i < string.length; i++) {
//     let location = alphabet.indexOf(string[i]);
//     let newLocation = (location + num) % 26;
//     cypherText += alphabet[newLocation];
//   }
//   return cypherText;
// }

// console.log(caesarCipher("a", 1)); //b
// console.log(caesarCipher("apple", 1)); // "bqqmf"
// console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
// console.log(caesarCipher("zebra", 4)); // "difve"

//Write a function vowelCipher that takes in a string and returns a new string where every vowel
//becomes the next vowel in the alphabet.

function vowelCipher(string) {
  let vowels = "aeiou";
  let vowelCipherText = "";
  for (let i = 0; i < string.length; i++) {
    //check for vowel
    if (vowels.indexOf(string[i]) >= 0) {
      //is a vowel
      let location = vowels.indexOf(string[i]);
      let newLocation = (location + 1) % 5;
      vowelCipherText += vowels[newLocation];
    } else {
      // not a vowel - keep letter
      vowelCipherText += string[i];
    }
  }
  return vowelCipherText
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

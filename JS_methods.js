

//.length returns the length of characters in a string, or the number of elements in an array
"Alan Peter".length; // 10

//bracket notation returns the item at the index number is passed in bracket
let name = "Alan Peter";
name[0]; // "A"
name[name.length - 1]; // "r" (name.length - 1 returns the last character in the string, or the last element of an array)

let arr1 = ["a", "b", "c", "d", 1, 2, 3];
arr1[3]; // "d"
arr1[arr1.length - 1]; // 3
arr1[arr1.length - 2]; // 2

//indexOf(x) return the index number of the item or string passed in the parentheses
let browserType = 'mozilla';
browserType.indexOf('zilla'); // 2 (returns what index the string 'zilla' begins at)
browserType.indexOf('handmaid'); // -1 (returns -1 when the string passed in not a part of the original string)
let arr2 = [1, 2, 3, 4, 5];
arr2.indexOf(3); // 2
arr2.indexOf(9); // -1

if (browserType.indexOf('mozilla') === -1) {
    // do stuff with the string if the 'mozilla'
    // substring is NOT contained within it
}

if (browserType.indexOf('mozilla') !== -1) {
    // do stuff with the string if the 'mozilla'
    // substring IS contained within it
}

//.slice(x,y) returns a copy of a part of a string, does not affect original string
// first parameter is the starting index, second parameter is the index AFTER the last index copied
browserType.slice(0, 3) // 'moz'

// if only one parameter is passed, the copy (slice) goes from that index to the end
browserType.slice(2) // 'zilla'

//.toLowerCase() and .toUpperCase() return the string in all lowercase characters, and all uppercase characters
// no arguments passed
let radData = 'My NaMe Is MuD';
radData.toLowerCase(); // 'my name is mud';
radData.toUpperCase(); // 'MY NAME IS MUD';

//.replace(x,y) replaces part of string(x) with another substring(y)
browserType.replace('moz', 'van'); // 'vanilla'

//.split(x) splits a string at whatever x is. Creates an array of items that are split by the character or characters
let str1 = 'My name is Hernan,Luis,Berisso';
str1.split(',') // ['My name is Hernan', 'Luis', 'Berisso']

// .join(x) method joins items in an array with the character passed as x, and returns a string
// arr1 = ["a", "b", "c", "d", 1, 2, 3];
arr1.join('!'); // 'a!b!c!d!1!2!3'

// .toString() method converts an array to a string, always seperated by a comma
arr1.toString(); // 'a,b,c,d,1,2,3'

// .push(x) adds an element(x) onto the END of an array. One or more items can be passed as arguments
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
myArray.push('Cardiff'); // the NEW length of the array will be returned
myArray; // ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle', 'Cardiff']

// .unshift(x) is similar to the .push() method, only it adds the element to the BEGINNING of the array

// .pop(x) removes the last element off of an array
myArray.pop(); // returns the removed element if logged
myArray; // ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'] returns array without removed element

// .shift(x) is similar to the .pop() method, only it removes the element at the BEGINNING of the array



// [^ aeiou] //regex for non vowels





// var str = "Mr Blue has a blue house and a blue car";
// var str = str.split(' ')
// for (let words in str) {
//     words.replace(/[^aeiouAEIOU]/g, "")
// }




function mostVowels(str) {
    const words =
        str.split('.')
            .join('')
            .split(',')
            .join('')
            .split(' ');
    const VOWELS = 'aeiouAEIOU';

    let maxVowelCount = 0;
    let maxWord = '';

    for (let i = 0; i < words.length; i++) {

        let currentWord = words[i];
        let currentVowelCount = 0;


        for (let j = 0; j < currentWord.length; j++) {
            const currentLetter = currentWord[j];

            if (VOWELS.indexOf(currentLetter) !== -1) {
                currentVowelCount++;
            }
        }
        if (currentVowelCount > maxVowelCount) {
            maxVowelCount = currentVowelCount;
            maxWord = currentWord;
        }
        return maxWord;
    }
}

console.log(mostVowels("Mr Blue has a blue house and a blue car"))



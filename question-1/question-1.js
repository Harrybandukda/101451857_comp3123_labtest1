/// MO HARRY BANDUKDA ///
/// STUDENT ID: 101451857 ///
/// LAB TEST ONE - COMP2123 ///

// Question One:
// Create a script with a function named lowerCaseWords that takes a mixed array as input.
// The function will do the following.
//  - return a promise that is resolved or rejected
//  - filter the non-strings and lower case the remaining words

function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        const lowercasedStr  = array
        .filter(array => typeof array === 'string')
        .map (array => array.toLowerCase());

        (lowercasedStr.length > 0) 
            ? resolve(lowercasedStr) 
            : reject('Opps: String is not found in th array');
    })
    
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wing']
const mixedArray2 = ['HArRY', 'PrItEsH', false, 25, 'pATEL', 'BANDUKDA'] 
const mixedArray3 = [false, 25,] 

lowerCaseWords(mixedArray)
    .then(result => console.log(result))    
    .catch(error => console.log(error))

lowerCaseWords(mixedArray2)
    .then(result => console.log(result))    
    .catch(error => console.log(error))

lowerCaseWords(mixedArray3)
    .then(result => console.log(result))    
    .catch(error => console.log(error))

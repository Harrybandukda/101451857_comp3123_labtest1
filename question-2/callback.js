/// MO HARRY BANDUKDA ///
/// STUDENT ID: 101451857 ///
/// LAB TEST ONE - COMP2123 ///


// Question Two:

// Write a script that does the following:
// Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
// Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
// Call both promises separately and handle the resolved and rejected results, then output to the console.


const resolvedPromised = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success : Delayed sucess')
    }, 500)
})

const rejectedPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error : Delayed error')
    }, 500)
})

resolvedPromised()
    .then(result => console.log(result))

rejectedPromise()
    .catch(error => console.log(error))

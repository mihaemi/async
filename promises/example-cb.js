//  get numbers --- > max number --- > render number


// io - input output

// Synchronous 
// const getNumbers = (size = 10) => {
//     let numbers = []
//     while (numbers.length <size) {
//         numbers.push(Math.ceil( -5 + Math.random() * 10 ))
//     }
//     return numbers
// }

// // process
// const maxNumber = (numbers) => {
//     let maxNumber = numbers[0]
//     for (let i=0;i<numbers.length;i++) {
//         if(numbers[i]>maxNumber) {
//             maxNumber = numbers[i]
//         }
//     }
//     return maxNumber
// }

// // render
// const renderNumber = (number) => {
//     console.log(">>>", number)
// }

// let numbers = getNumbers()
// let max_number = maxNumber(numbers)
// renderNumber(max_number)



// Asynchronous 

const getNumbers = (cb, size = 10) => {
    let numbers = []

    setTimeout (() => {
        while (numbers.length <size) {
        numbers.push(Math.ceil( -5 + Math.random() * 10 ))
        }
        cb(numbers)
    }, Math.random() *3000)
    
    //return numbers
}

// process
const maxNumber = (cb, numbers) => {
    let maxNumber = numbers[0]
    setTimeout(() => {
        for (let i=0;i<numbers.length;i++) {
        if(numbers[i]>maxNumber) {
            maxNumber = numbers[i]
        }
    } cb(maxNumber)
    }, Math.random() * 3000)
    
    // return maxNumber
}

// render
const renderNumber = (number) => {
    console.log(">>>", number)
}

//getNumbers(maxNumber(renderNumber))
//let max_number = maxNumber(numbers)
//renderNumber(max_number)

getNumbers((numbers) => {
    maxNumber(renderNumber, numbers)
})



// -----------------

// const renderNumber = (cb, number) => {
//     let result = ``
//     setTimeout(()=> {
//         result = `{number: ${number}}`
//         cb(result)
//     }, Math.random() * 1000)
//     //console.log(">>>", number)
// }

// getNumbers((numbers) => {
//     maxNumber((maxNumber) => {
//         renderNumber(console.log, maxNumber)
//     }, numbers)
// })
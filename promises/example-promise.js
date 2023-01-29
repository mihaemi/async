const pGetNumbers = (size = 10) => {
    return new Promise((resolve, reject) => {
        let numbers = []

        setTimeout (() => {
            while (numbers.length <size) {
            numbers.push(Math.ceil( -5 + Math.random() * 10 ))
            }
            resolve(numbers)
        }, Math.random() *3000)
    })
}

// process
const pMaxNumber = (numbers) => {
    return new Promise((resolve, reject) => {
        let maxNumber = numbers[0]
        setTimeout(() => {
            for (let i=0;i<numbers.length;i++) {
            if(numbers[i]>maxNumber) {
                maxNumber = numbers[i]
            }
        } resolve(maxNumber)
        }, Math.random() * 3000)    
    })
} 
    
    
    // return maxNumber


// render
const renderNumber = (number) => {
    return new Promise((resolve, reject) => {
        let result = ``
        setTimeout(() => {
            result = `{number:}: ${number}`
            resolve(result)
        }, Math.random() * 1000)
    })
}

// let p_numbers = pGetNumbers(5)
// let p_max_number = p_numbers.then((numbers) => {
//     return pMaxNumber(numbers)
// })
// p_max_number.then((result) => {
//     console.log(result)
// })


// declarative coding
function execute () {
    pGetNumbers(5)
        .then((numbers) => {
            return pMaxNumber(numbers)
        })
        .then((max_number) => {
            return renderNumber(max_number)
        })
        .then((result) => {
            console.log(result)
        })
}
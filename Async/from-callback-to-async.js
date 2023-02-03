// AD ROTATOR

// 'Callbacks', 'Promises', 'Async/await'


//callback
const showAdd = () => {
    console.clear()
    console.log('Callback')
    setTimeout(() => {
        console.clear()
        console.log('Promises')
        setTimeout(() => {
            console.clear()
            console.log('Async-await')
            setTimeout(()=> {
                console.clear()
            }, 2000)
        }, 2000)
    }, 2000);
}

// promise
let promiseShowAd = new Promise((resolve,reject)=> {
    console.clear()
    console.log('Callback')
    setTimeout(() => {
        console.clear()
        resolve()
    }, 2000) 
})

promiseShowAd.then(()=> {
    console.log('Promises')
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            console.clear()
            resolve()
        }, 2000);
    })
}).then(()=> {
    console.log('async/await')
})


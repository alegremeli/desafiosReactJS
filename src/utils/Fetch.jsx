let its_ok = true
let Fetch = (time, array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (its_ok) {
                resolve(array)
            } else {
                reject("Error")
            }
        }, time)
    })
}

export default Fetch
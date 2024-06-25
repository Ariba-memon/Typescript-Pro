// Promises : // PROMISES

// let promise = new Promise((resolve,reject) => {})
// console.log(promise)



function loginUserWithPromise(email: string, password: string){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email === "bilal@email.com"){
                resolve(email)
            }else {
                reject("Incorrect Email or password")
            }
        }, 2000);
    })
}

let getUserVideosWithPromises = (email: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email === "bilal@email.com"){
                resolve(["video1", "video2", "video3"]);
            }else {
                reject("Incorrect Email")
            }
        }, 3000);
    }) 
}

loginUserWithPromise("bilal@email.com", "12345").then((email) => {
    console.log("Loggedin successfully")
    return getUserVideosWithPromises(email as string)
    .then((videos) => console.log(videos))
}).catch((error) => console.log(error))
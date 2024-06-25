// CallBack : // console.log("first")
// delay 10

//  Web API
// setTimeout(() => console.log("second"), 2000)


// console.log("third")

// function func1(callback: () => void){
//     callback();
// }

// function callbackFunc(){
//     console.log("this is a callback function")
// }

//  func1(() => console.log("this is a callback function"));






function loginUserWithCallback(email: string, password: string, cb: (email: string) => void){
    setTimeout(() => {
        cb(email)
    }, 2000);
}


let getUserVideos = (email: string, cb: (videos: string[]) => void) => {
    setTimeout(() => {
        if(email === "bilal@email.com"){
            cb(["video1", "video2", "video3"]);
        }
    }, 3000);
}


loginUserWithCallback("ariba@email.com", "bilal", (email) => {
    console.log("User loggedIn: ", email)
    getUserVideos(email, (videos) => console.log("USER VIDEOS: ",videos))
})
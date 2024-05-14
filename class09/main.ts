console.log("Hello Objects!");
// const myProperties = ["Ubaid","Bhol gaya",10101,8]



// Objects


// const myProperties = {
//     address:{
//         city:"Gumnam",
//         country:"Khasta Haal",
//         postalCode:undefined,
//     },
//     name: "Ubaid",
//     age : 10,
//     rollNo: 10101,
// }

// console.log(myProperties.address.country);
// const userPrompt = "name"
// console.log(myProperties[userPrompt]);



// console.log(myProperties[1]);



let myProperties:{
    name:string,
    age:number,
    address:{
        flatNo:number,
        city:string,
        country:string,
    },
    rollNo: number
}={
     name:"Gumnam",
     age:15,
     rollNo:100011,
     address:{
        country:"Gumnam",
        city:"pata nahin",
        flatNo:190

     }
}

console.log(myProperties.address.city);



let rollNo:string | number | boolean;
rollNo = 123456789;
rollNo = "PIAIC-198060";
rollNo = false




// // let number = 5

// // for(let i = 10; i > 1; i++){
// //     console.log(i);
// // }

// // console.log(2 X 1 = ${2 * 1});
// // console.log(2 X 2 = ${2 * 2});
// // console.log(2 X 3 = ${2 * 3});
// // console.log(2 X 4 = ${2 * 4});
// // console.log(2 X 5 = ${2 * 5});




// let fruits: string[] = ["Mango", "Apple", "Banana", "Orange", "Pinapple"]

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }





// enum MENU {
//     ROLL ="roll",
//     BEEFROLL ="beefroll",
//     MALAIBOTTI = "malaibotti",
//     TIKKA = "tikka",
// }
// enum REVIEW {
//     BAD,
//     GOOD,
//     DELICIOUS,
// }
// type Order ={
//     order:MENU,
//     payment:number,
//     review:REVIEW
// }
// let hamzaOrder:Order={
//     order: MENU.BEEFROLL,
//     payment: 100,
//     review:REVIEW.DELICIOUS
// }
// console.log(hamzaOrder);
 



let myName: any = "Ubaid"

// console.log(myName.toUpperCase())

let age: unknown = 5;
// console.log(typeof age)
// if(typeof age === "number"){
//     console.log(age * 2)
// }else { 
//     console.log("Incorrect data")
// }

let person: unknown = 20

console.log((person as string).toUpperCase());

console.log(person.toUpperCase());
// // // let userName: string  = "Ubaid"
// // // let teacherobj: {
// // //   age: number,
// // //       name: string,
// // //     expertDeveloper: boolean,
// // //     qualities: {
// // //         hairColor: string,
// // //         height: number
// // //     },
// // import { BlobOptions } from "buffer"
// // // } = {
// // //     name: "Ali Aftab",
// // //     age: 15,
// // //     expertDeveloper: true,
// // //     qualities: {
// // //         hairColor: "Black",
// // //         height: 5.11
// // //     }
// // // }
// // // console.log(teacherobj.qualities.height)
// // // console.log(teacherobj.qualities["height"])
// // // // type alias
// // // type studentObjType = {
// // // name: string,
// // // age: number,
// // // expertDeveloper: boolean,
// // // qualities: {
// // // 	hairColor: string,
// // // 	height: number
// // // },
// // // }
// // // let studentObj: studentObjType = {
// // // 	name: "usman",
// // // 	age: 26,
// // // 	expertDeveloper: true,
// // // 	qualities: {
// // // 		hairColor: "black",
// // // 		height: 2.5
// // // 	}
// // // 	}
// // // anonymous
// // // let teacher : {name: string, exp: number} = {
// // // 	name: "Zeeshan",
// // // 	exp: 10
// // // }
// // // let student:{name:string,age:number} ={
// // // 	name:"usman",
// // // 	age:26
// // // }
// // // Aliased Object Type
// // type Student = {
// // 	name: string,
// // 	age: number
// // 	expertDeveloper:boolean
// // }
// // let student: Student = {
// // 	name: "usman",
// // 	age: 26,
// // 	expertDeveloper: true
// // }
// //union literals
// let age: string | number | boolean;
// age = 25
// age = "Twenty Five"
// "h-85, st# 1 karachi"
// // Type Literals
// let TrafficLights: "Red" | "Orange" | "Green";
// TrafficLights = "Red"
// let age1: number | "dead" | "unknown";
// type person1 = {
// 	name: string,
// 	age: number
// }
// type person2 = {
// 	gender: string,
// 	exp: number
// }
// type personType = person1 & person2
// let person: personType = {
// 	name: "Sir Zeeshan",
// 	age: 35,
// 	gender: "male",
// 	exp: 22
// }
// arrays
var fruitNames = ["Banana"];
console.log(fruitNames);

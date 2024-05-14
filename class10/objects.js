var userObj = {
    name: "Kamran Khan Tessori",
    designation: "Governor Sindh",
    residence: "Governor House"
};
// console.log(userObj.name)
// console.log(userObj["name"])
// console.log(`User name is ${userObj.name}, and designation is ${userObj.designation}, and residence is ${userObj.residence}`)
// console.log(userObj.name, userObj.designation, userObj.residence)
var teacherName = "Ali Aftab";
var teacherDesignation = "Teacher";
var teacherREsidence = "Karachi";
var teacherobj = {
    name: "Ali Aftab",
    designation: "Teacher",
    residence: "Karachi",
    age: 15,
    expertDeveloper: true,
    qualities: {
        hairColor: "Black",
        eyeColor: "pink",
        height: 5.11
    }
};
console.log(teacherobj.qualities.height);
console.log(teacherobj["qualities"].height);
console.log(teacherobj["qualities"]["height"]);

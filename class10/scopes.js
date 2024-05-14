// Global Scope
var name1 = "Usman";
var name2 = "Mehwish";
var name3 = "Ali";
// Block Scope
if (true) {
    var name1_1 = "Rida";
    console.log("INSIDE IF BLOCK", name1_1);
}
console.log("GLOBAL SCOPE", name1);

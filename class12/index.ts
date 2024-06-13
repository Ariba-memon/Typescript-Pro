//! REST PARAMETERS

function total(...totalItem: number[]) {
    let totalPrice: number = 0;
    for (let i = 0; i < totalItem.length; i++) {
      totalPrice += totalItem[i];
    }
    console.log("TOTAL: ", totalPrice);
  }
  total(10, 1000, 2000, 5000, 4000);
  
  function greeting(...greet: string[]) {
    console.log(greet.join(" "));
  }
  
  greeting("Hello", "Faizan");
  
  
  //! FUNCTION OVERLOADING
  
  function sum(a: number, b: number): number;
  function sum(a: string, b: string): string;           //Signature Overload
  
  function sum(a: any, b: any): any {
    return a + b;
  }
  
  console.log(sum("Bilal", "Ali"));
  console.log(sum(2, 3));
  
  
  function signIn(email: string, password: string): string
  function signIn(email: string): string
  
  function signIn(email: any, password?: any):any{
      console.log(email, password)
  }
  
  //! Structural Typing
  
  type  Ball ={
      diameter: number
  }
  
  type  Bat ={
      diameter: number
  }
  
  let ball : Ball = {diameter : 10}
  let bat : Bat = {diameter:20}
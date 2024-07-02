//OOP  

let myObj= {
   name: "Ali",
   printObjProperties(){
    console.log(this.name)
   }
}

class Parent {
  email: string;
  password: number;
  constructor(e: string, p: number) {
    this.email = e;
    this.password = p;
  }
}


class Child extends Parent{
    role: string;
    constructor(r: string){
        super('ali@gmail.com', 123)
        this.role = r
    }
}

const child1 = new Child("Admin")
console.log(child1);

// const user1 = new User("a1@gmail.com", 1234);

// user1.email = "a2@gmail.com"

// console.log(user1);
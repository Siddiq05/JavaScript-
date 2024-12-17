function User(UserName, UserAge, UserCity) {
  this.UserName = UserName; // this.UserName acts as a variable like const myUsername = UserName and same follows for below two things
  this.UserAge = UserAge;
  this.UserCity = UserCity;
  return this// this is optional it will return anyhow implicitly 
}

// let UserOne = User("Sid", 27, "Kolar");
// let UserTwo = User("Sam", 23, "Goa");
// console.log(UserOne); // now the value of userone is over written by usertwo even though we are calling userone and to avoid this we will use below method

let UserOne = new User("Sid", 27, "Kolar");
let UserTwo = new User("Sam", 23, "Goa");
console.log(UserOne);
console.log(UserTwo);
console.log(UserOne.constructor); // output [Function: User]
console.log(UserOne instanceof User);// output true

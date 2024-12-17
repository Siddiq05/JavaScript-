// function multipleBy5(num) {
//   return num* 5;
// }

// multipleBy5.power=2;

// console.log(multipleBy5(5));// output 25
// console.log(multipleBy5.power);// output 2
// console.log(multipleBy5.prototype); // output Object

// let name1="Sid     ";
// console.log(name1.length);// output 8
// console.log(name1.truelength);// output undefined

let HeroArr =["SRK","SK"];
let hero = {
  first:"SRK",
  Second: "SK",
  getHero: function(){
    console.log(`Main hero is ${this.Second}`);
  }
}

Object.prototype.Sid= function(){
  console.log(`Sid is present in all Objects`);
}

Array.prototype.HeySid= function(){
  console.log(`Hey Sid`);
}

hero.getHero();
hero.Sid();
// hero.HeySid();// hero doesnt have the access of an array
HeroArr.HeySid();
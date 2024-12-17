// import { Name, name,arr, alias as Obj } from "./new.js"; //alias as Obj ----> assigning new name to it
// console.log(Name);
// document.getElementById("H1").innerHTML=Name;
// name();
// console.log(arr);
// console.log(Obj.name);

// when u want to import whole file then do below method 
// import * as New from "./new.js"; //alias as Obj ----> assigning new name to it
// console.log(New.Name);
// document.getElementById("H1").innerHTML=New.Name;
// New.name();
// console.log(New.arr);
// console.log(New.alias.name);

// export default --> after exporting default function we can give name in import as given below as Hello 

// import Hello from "./new.js";

// Hello();

// Multiple exports file

import { Age } from "./bridge.js";
console.log(Age);

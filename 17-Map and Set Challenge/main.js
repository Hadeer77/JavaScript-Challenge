/* - you can not use Numbers or true or false
- Do not use Array indexes
- you cant  use Loop
- you cant use any higher order functions
- only one line solution inside console
- if you use length => then only time only 
Hints:-
- you can use * operator only in calulation
- set 
- spread operator
- math object methods */

let n1= [10,30,10,20];
let n2 =[30,20,10];
//console.log("your solutions here"); //210
console.log(Math.max(...n1)*([...n1,...n2].length));
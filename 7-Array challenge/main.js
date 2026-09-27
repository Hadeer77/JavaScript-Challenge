let zero = 0;
let counter = 3;

let my = ["Ahmed" , "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// ["Osama" , "Elham", "Mazero", "Ahmed"]

console.log(my.slice(zero , ++counter).reverse());

// console.log(my.slice("???")); ["Elham" , "Mazero"]
console.log(my.slice(++ zero , --counter).reverse());

// Elzero
console.log(my[--counter].slice(--zero , counter) + my[++zero].slice(counter));

// "rO"
console.log(my[zero][++counter + zero]+ my[zero][++counter + zero].toUpperCase());
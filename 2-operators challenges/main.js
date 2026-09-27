/* callenge 1
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
[++a] [+] 
value
Explain*/

let a = 10;
let b = "20";
let c = 80;

// prefix (++a) updates the value before use.
// postfix (a++) updates it after use. 
/*  1. ++a : a becomes 11. value used = 11. 

2. +b++ : 
the first + is a unary plus that converts the string "20" to the number 20.
. it is postfix, so we use 20 now, then b becomes 21 in the background.

3. +c++ :
unary plus converts c to a number (it already is, so it stays 80).
. postfix, so we use 80 , then c becomes 81.

4. +a++ :
. current a is 11 .
postfix, so we use 11, then a becomes 12.

console.log(++a + +b++ + +c++ - +a++);
the equation: 11 + 20 + 80 - 11 = 100

console.log(++a + -b + +c++ - -a++ + +a);
current values starting this line: a= 12 , b=21 , c=81
the equation: 13 + -21 + 81 - -13 +14 = 100


console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
current values starting this line: a=14, b=21 , c=82
the equation: 81 + 21 + (13*21)-(22*13)+ 12 - 1 = 100
*/


// challenge 2
let d= "-100";
let e = "20";
let f = 30;
let g = true;

// only use variables value
// do not use variable twice
// console.log() 2000
// console.log() 173

  console.log( -d * e);  
//    --100 * 20 = 2000   

console.log( -d + +e* ++g +f + ++g);
//    100 + (20*2) +30 + 3 = 173

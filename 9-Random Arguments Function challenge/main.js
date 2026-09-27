/* create function showDetails
function accept 3 parameters [a , b , c]
Data types for info is :-
- string => Name
- Number => Age 
-Boolean => status 
Argument is random 
Data is not sorted output depend on Data Types 
- use ternary conditional operator

showDetails("Osama", 38,true); //"Hello Osama, Your Age Is 38 , You Are Available for Hire"
showDetails(38,"Osama",true);   //"Hello Osama, Your Age Is 38 , You Are Available for Hire"
showDetails(true, 38, "Osama");   //"Hello Osama, Your Age Is 38 , You Are Available for Hire"
showDetails(false, 38 ,"Osama");   //"Hello Osama, Your Age Is 38 , You Are Not Available for Hire"
 */

function showDetails(a , b , c){
    let name , age , status;
    typeof a === "string" ? (name = a): typeof a === "number" ? (age = a): (status = a);
    typeof b === "number" ?(age = b):(status = b);
    typeof c === "string" ?(name = c): typeof c === "number" ? (age = c): (status = c);


let availability = status === true ? 
"You Are Available for Hire" :
"You Are Not Available for Hire";

console.log(`Hello ${name}, Your Age Is ${age}, ${availability}`);
}
showDetails("Osama", 38,true); 
showDetails(38,"Osama",true);   
showDetails(true, 38, "Osama");   
showDetails(false, 38 ,"Osama");

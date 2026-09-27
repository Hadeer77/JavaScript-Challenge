let myAdmins =["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];


// admins count before "stop"
let adminsCount = 0;
for(let i = 0; i < myAdmins.length; i++){
    if(myAdmins[i]=== stop){
        break;
    }
    adminsCount++;
}

// print the first line with numbers of Admins

document.write(`<div> We Have ${adminsCount} Admins </div>`);
document.write(`<hr>`);

// the main loop for Admins

for(let i = 0; i < adminsCount; i++){
    document.write(`<div>`);
    document.write(`The Admins for Team ${i + 1} is ${myAdmins[i]}`);
    document.write(`<h3> Team Members: </h3>`);


let employeeCounter = 1; 
  for( let j = 0; j < myEmployees.length; j++){
    // check if the name of employee starts with the same first character of Admins' name
    if(myEmployees[j][0] === myAdmins[i][0]){
        document.write(`<p> ${employeeCounter} ${myEmployees[j]} </p>`);
        employeeCounter ++;
    }
  }
   document.write(`</div>`);
   document.write(`<hr>`);
}

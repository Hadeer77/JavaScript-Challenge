let job = "Manager";
let Salary = 0;

/* if(job === "Manager"){
    Salary = 8000;
}else if(job === "IT" || job === "Support"){
    Salary = 6000;
}else if(job === "Developer" || job ==="Designer"){
    Salary= 7000;
}else{
    Salary= 4000;
} */

switch(job){
    case "Manager":
        Salary = 8000;
        break;
    case "IT":
    case "Support":
        Salary = 6000;
        break;
    case "Developer":
    case "Designer":
        Salary = 7000;
    default:
        Salary = 4000;
}
console.log(`the salary for ${job} is ${Salary}`);

let holidays = 0;
let money = 0;

/* switch (holidays){
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);

} */


if(holidays === 0){
    money = 5000;
}else if(holidays ===1 || holidays ===2){
    money = 3000;
}else if(holidays === 3){
    money = 2000;
}else if(holidays === 4){
    money = 1000;

}else if(holidays === 5){
    money = 0;
}else{
    money = 0;
}
console.log(`My Money is ${money}`);

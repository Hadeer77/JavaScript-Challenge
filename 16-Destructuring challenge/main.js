let chosen = 1;

let myFriends = [
    {title: "osama", age: 38, available: true, skills: ["HTML" ,"CSS"]},
    {title: "ahmed", age: 25, available:false, skills:["Python" , "Django"]},
    {title: "sayed", age: 33, available:true, skills: ["PHP", "Laravel"]},
];

let title , age , available , lastSkill;

if(chosen===1){
    [{title ,age ,available ,skills: [,lastSkill]}] = myFriends;
}else if(chosen === 2){
    [, {title, age , available, skills:[,lastSkill]}] = myFriends;
}else if(chosen === 3){
    [, , {title , age , available , skills:[,lastSkill]}] = myFriends;
}

const availabilityStatus = available? "available" : "not available";

console.log(title);
console.log(age);
console.log(availabilityStatus);
console.log(lastSkill);
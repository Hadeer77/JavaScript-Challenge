//function Arrow Challenges
//[1] one statement in function.
//[2] convert to Arrow function.
//[3] print the output [Arguments may change]
/* let names = function(){
    ???
    return "???";
};
console.log(names("osama","mohamed","ali","ibrahim"));
//string [osama], [mohamed], [ali], [ibrahim] => Done ! */

let names = function(...names){
    return `string [${names.join("] , [")}] => Done !`;
};
console.log(names("osama","mohamed","ali","ibrahim"));

let namesArrow = (...names) =>  `string [${names.join("] , [")}] => Done !`;
console.log(namesArrow("osama","mohamed","ali","ibrahim"));

/* =================== */
//[1] replace ??? in return statement to get the output.
//[2] create the same function with regular syntax.
//[3] use Array inside the arguments to get the output.
/* let myNumbers = [20 , 50 , 10 , 60];
let calc = (one , two , ...nums) => "???";
console.log(calc(10 , "???", "???")); //80 */

let myNumbers = [20 , 50 , 10 , 60];
let calc = (one , two , ...nums) => one +two + nums[0];
console.log(calc(10 ,20, 50 ));
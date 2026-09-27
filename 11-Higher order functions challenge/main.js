/* Higher order functions challenges
you can use , _ space  true=>only one time.
you cannot use  numbers  letters.
you must use [filter + map + reduce]
All in one chain

*/


let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
let solution = myString.split(",").filter(function(ele){
    return isNaN(ele);

})
.map(function(ele,index,arr){
    if (ele === "_") return " ";
    if(ele.length > true) return ele["_".length - "_".length];
    if (index === arr.length - "_".length) return "";
    return ele;
})
.reduce(function(acc , current){
    return acc + current;
});
console.log(solution);

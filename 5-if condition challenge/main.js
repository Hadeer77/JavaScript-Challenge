let a = 10;
/* 
if(a < 10){
    console.log(10);
}else if(a >= 10 && a <= 40){
    console.log("10 t 40");
}else if( a > 40){
    console.log("> 40");
}else{
    console.log("unknown");
} */

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
    ? console.log("10 t 40")
    : a > 40
      ? console.log("> 40")
      : console.log("unknown");


// write with ternary if syntax

let st = "Elzero Web School";
/*  if("???" === "34"){
console.log("Good");
} */

if ((st.length * 2).toString() === "34"){
    console.log("Good");
}

/* w position may change 
if("???" === "w"){
console.log("Good");
} */ 

if (st.charAt(st.indexOf("w")) === "w"){
    console.log("Good");
}

/* if("???" !== "string"){
console.log("Good");
} */

if(typeof(st.length) !== "string"){
    console.log("Good");
}

/* if("???" === "number"){
console.log("Good");
} */
if(typeof(st.length === "number")){
    console.log("Good");
}

/* if("???" === "ElzeroElzero"){
console.log("Good");
} */

if(st.slice(0 , 6).repeat(2) === "ElzeroElzero"){
    console.log("Good");
}
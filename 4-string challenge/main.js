let A = "Elzero Web School";

// include this methods in your solution [slice , charAt] zero
console.log(A.charAt(2).toUpperCase() + A.slice(3 , 6));

// HHHHHHHH (H 8)
console.log(A.slice(-4 ,-3 ).toUpperCase().repeat(8));

// return array [Elzero]
console.log(A.split(" " , 1));

// use only "substr"  method + templete literals in your solution  (Elzero School)
console.log(` ${A.substr(0 , 6)} ${A.substr(11)}`);

// solution must be dynamic and string may change (eLZERO WEB SCHOOl)
console.log(A.charAt(0).toLowerCase() + A.slice(1 , -1).toUpperCase() + A.slice(-1).toLowerCase());


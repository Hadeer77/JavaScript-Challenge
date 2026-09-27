// currency converter
let inputDollar = document.querySelector("[name='dollar']");
let resultDiv = document.querySelector(".result");

inputDollar.addEventListener("input" , function(){
    let dollarValue = parseFloat(inputDollar.value) || 0;
    let egpValue = dollarValue* 51.04 ;
    resultDiv.innerHTML =`${dollarValue} USD Dollar = ${egpValue.toFixed(2)} Egyptian Pound`;


});


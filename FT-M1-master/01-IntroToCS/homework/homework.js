'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  array = [];
for(let i = num ; num > 1 ; num = num /2) {
  let x = Math.floor(num % 2) ;
  array.push (x);
}
return array.reverse().join("");
}
function DecimalABinario(num) {
  // tu codigo aca
  let  array = String(num).split("").reverse();
  let count = 0.5 ;
  let suma = 0;
  for(let i = 0 ; i <array.length; i++) {
    count *= 2 ;
    suma += Number(array[i])* count;
  }
  return suma;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
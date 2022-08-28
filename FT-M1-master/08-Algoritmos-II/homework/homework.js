'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
    const [a,...b] = array,

    left =b.filter(number=> number <= a) ,
    right =b.filter(number=> number > a)
      return quickSort(left).concat(a, quickSort(right))
};
  //1 option
//   if (array.length <= 1) {
//     return array;
//   }
//       let x = array[array.length - 1] ;
//      let left = array.slice(0, array.length - 1).filter(number=> number <= x) ;
//       let right = array.slice(0, array.length - 1).filter(number=> number > x) ;
//       return quickSort(left).concat(x, quickSort(right));
// };
//2nd option
// let left;
// let right;
// if (sizeL===0 && sizeR===0 && path===0) {
//   let x = array[array.length - 1] ;
//   left = array.slice(0, array.length - 1).filter(number=> number <= x) ;
//   right = array.slice(0, array.length - 1).filter(number=> number > x) ;
//   sizeL = left.length;
//   console.log(sizeL)
//   pivots.unshift(sizeL);
//   console.log(pivots);
//   sizeR= right.length;
//   path+= sizeR+1 ;
//   array = left.concat([x],right)
//   return quickSort(array,sizeL,sizeR,pivots,path);
// }
// if(path<array.length && sizeL>=0){
//   let x = array[sizeL-1];
//   left= array.slice(0, sizeL-1).filter(number=> number <= x) ;
//   right= array.slice(0, sizeL-1).filter(number=> number > x);
//   sizeL = left.length;
//   pivots.unshift(sizeL);
//   sizeR= right.length;
//   path+=sizeR+1;
//   let result = left.concat([x],right)
//   array.splice(0,result.length,result).flat();
//   array = array.flat();
//   return quickSort(array,sizeL,sizeR,pivots,path);
// }
// console.log(pivots)
// if(sizeR>=0 && pivots.length>2){
//   let x = array[pivots[2]-1]; 
//   console.log(x);
//   left= array.slice(pivots[1]+1, pivots[2]-1).filter(number=> number <= x) ;
//   console.log(left);
//   right= array.slice(pivots[1]+1, pivots[2]-1).filter(number=> number > x) ;
//   console.log(right);
//   sizeL = left.length;
//   sizeR= right.length;
//   if(sizeR>0){
//   let result = left.concat([x],right);
//   array.splice(pivots[1]+1,result.length,...result).flat();
//   array = array.flat();
//   pivots.shift();
//   return quickSort(array,sizeL,sizeR,pivots,path);
//   } else {
//   pivots.shift();
//   return quickSort(array,sizeL,sizeR,pivots,path);
// }
// }

//   return array;

// }
//3nd option
// function quicksort(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   var pivot = array[0];
  
//   var left = []; 
//   var right = [];

//   for (var i = 1; i < array.length; i++) {
//     array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//   }

//   return quicksort(left).concat(pivot, quicksort(right));
// };
const merge = (left, right) => {
  const resArr = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    left[leftIdx] < right[rightIdx]
      ? resArr.push(left[leftIdx++])
      : resArr.push(right[rightIdx++]);
  }
  return [...resArr, ...left.slice(leftIdx), ...right.slice(rightIdx)];
};

const mergeSort = arr =>
  arr.length <= 1
    ? arr
    : merge(
        mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
        mergeSort(arr.slice(Math.floor(arr.length / 2)))
      );

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

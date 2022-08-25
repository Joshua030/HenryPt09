'use strict'
// No cambies los nombres de las funciones.

function factorear(num, divisor = 2, numbers = []) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  function esPrimo(key) {
    if (key === 2) return true;
    for (let i = 2; i < key; i++) {
      if (key % i === 0) {
        return false;
      }
      return true
    }
  }

  if (num <= 1) {
    numbers.unshift(1);
    return numbers;
  }
  if (esPrimo(divisor) && num % divisor === 0) {
    numbers.push(divisor)
    return factorear(num / divisor, divisor, numbers);
  }
  return factorear(num, divisor + 1, numbers);
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function organize(array) {
    return array.reduce((initial, current, index) => {

      if (initial[0] === undefined) {
        initial[0] = current;
        return initial;
      }
      if (initial[index - 1] <= current) {
        initial.push(current);
        return initial;
      }
      if (initial[index - 1] > current) {
        initial.splice(index - 1, 2, current, initial[index - 1]);
      }
      return initial;

    }, [])

  }
  if (array.join() === organize(array).join()) {
    return array;
  }
  return bubbleSort(organize(array));
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  return array.reduce((initial, current) => {
    let index = 0;
    while (index < initial.length && current > initial[index]) index++;
    initial.splice(index, 0, current);
    return initial;
  }, []);
}


function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;

}









// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

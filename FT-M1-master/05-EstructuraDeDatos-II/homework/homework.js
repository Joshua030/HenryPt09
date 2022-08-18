"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList(head=null) {
  this.head = head
}

function Node(value) {
        this.value = value
        this.next = null
}

LinkedList.prototype.add = function (new_data){
    let new_node = new Node(new_data);
    if (this.head == null){
        this.head = new Node(new_data);
        return;
    }
    new_node.next = null;
    let last = this.head; 
    while (last.next != null)
        last = last.next;
    last.next = new_node;
    return;
}

LinkedList.prototype.remove = function ( ){
  if (!this.head) {
    return null ;
  }
  if (!this.head.next ) {
    let result =  this.head.value ;
    this.head = null;
    return result;
  }
  let previous= this.head;
  let node = this.head.next ;
  while (node.next ) {
    previous = node ;
    node=node.next;
  }
  let result = previous.next.value;
  previous.next = null;
  return result;
}

LinkedList.prototype.search =  function (x) {
  let currentNode = this.head ;
  if(typeof(x)=== "number" || typeof(x)=== "string"){
while (currentNode) {
  if (currentNode.value === x) {
    return currentNode.value ;
  }
currentNode = currentNode.next ;
}
return null ;
} else {
  while (currentNode) {
if (x(currentNode.value) === true) {
  return currentNode.value ;
}
currentNode = currentNode.next ;
}
return null ;
}
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.table = new Array(35);
    this.size = 0;
    this.numBuckets = new Array(35).length;
  }

  HashTable.prototype.hash= function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  HashTable.prototype.set = function (key, value) {
    if (typeof(key) !== "string"){
      throw TypeError();
    }
    const index = this.hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      // Find the key/value pair in the chain
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    // not found, push a new key/value pair
    this.table[index].push([key, value]);
  } else {
    this.table[index] = [];
    this.table[index].push([key, value]);
  }
  this.size++;

}

  

  HashTable.prototype.get = function (key) {
    const target = this.hash(key);
  if (this.table[target]) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[target][i][0] === key) {
        return this.table[target][i][1];
      }
    }
  }
  return undefined;
}

  HashTable.prototype.hasKey = function (key) {
    const target = this.hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return true
        }
        return false;
      }
    }
  } 
 

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};

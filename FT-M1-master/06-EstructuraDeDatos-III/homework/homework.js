"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // function to be implemented
  // insert(data)
  // remove(data)


  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)              
  // postorder(node)
  // search(node, data)
  insert(value) {
    if (value > this.value) {
      if (this.right === null)
        this.right = new BinarySearchTree(value)
      else this.right.insert(value);
    }

    if (value < this.value) {
      if (this.left === null)
        this.left = new BinarySearchTree(value)
      else this.left.insert(value);
    }
  }

  size() {
    if (this.value === null) return 0;
    if (this.left === null && this.right === null) return 1;
    if (this.left === null && this.right !== null) return 1 + this.right.size();
    if (this.left !== null && this.right === null) return 1 + this.left.size();
    return 1 + this.right.size() + this.left.size();

  }
  contains(value) {
    if (this.value === value) return true;

    if (value > this.value) {
      if (this.right === null) return false;
      return this.right.contains(value);
    }
    if (value < this.value) {
      if (this.left === null) return false;
      return this.left.contains(value);
    }
  }
  depthFirstForEach(cb, traverse) {
    if (traverse === "post-order") {
      if (this.left !== null) this.left.depthFirstForEach(cb, traverse);
      if (this.right !== null) this.right.depthFirstForEach(cb, traverse);
      cb(this.value);

    }
    else if (traverse === "pre-order") {
      cb(this.value)
      if (this.left !== null) this.left.depthFirstForEach(cb, traverse);
      if (this.right !== null) this.right.depthFirstForEach(cb, traverse);
    }
    else {
      if (this.left !== null) this.left.depthFirstForEach(cb, traverse);
      cb(this.value);
      if (this.right !== null) this.right.depthFirstForEach(cb, traverse);
    }
  }
  breadthFirstForEach(cb, queue = []) {
    if (this.left !== null) queue.push(this.left);
    if (this.right !== null) queue.push(this.right);

    cb(this.value);

    if (queue.length > 0) {
      queue.shift().breadthFirstForEach(cb, queue);
    }

  }
}




//     // find the correct position in the
//     // tree and add the node
//     this.insertNode(this.value, node);







// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

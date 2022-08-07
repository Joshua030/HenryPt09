
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

<!-- * Las diferencias son tres:
1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.
2. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.
3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse). -->

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
// Console.log  muestra:
// 10 
// 8 
// 8 
// 9 
// 10 
// 1
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

// La consola nos muestra ReferenceError debido a:
// "Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado".
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

// La consola mostrara "Franco" porque el condiconal es verdadero
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);

// La consola mostrara:
// Tony
// Franco 
// Tony
// porque la funcion solo cambia valores a nivel local.
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
// La consola nos mostrara:
// The Flash 
// Reverse Flash 
// The Flash 
// Franco
// debido a que let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NAN
7 / 0 // Infinity
{}[0] // Array [0]
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
// el resultado es 
// undefined 
// 2 
// undefined
// Esto por que al  realizar el proceso de hoisting, ya tiene reservado el espacio para esas variable y funciones, por lo tanto no se genera un error. Notesé que a la función la pudo ejecutar, esto quiere decir que durante el hoisting guardó su contenido también, no sólo reservó el espacio. Pero con el caso de la variable, sólo reservo el espacio, ya que cuando hacemos el console.log vemos que contiene undefined.
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```
<!-- Nos mostrara undefined por que nunca se le dara un valor a la variable snack dentro del ambito local de la funcion getFood. -->

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
Nos muestra :
Aurelio De Rosa 
Juan Perez

Ya que el primero se muestra a nivel local y el segundo anivel global, esta dependiendo del scope.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();

// Esto mostrara 
// 1adfjklñ}
// 4
// 3
// 2
// ya que al que se la da delay debe pasar el task queue y esperar en  la cola mientras el stack de ejecucion esta libre.
```

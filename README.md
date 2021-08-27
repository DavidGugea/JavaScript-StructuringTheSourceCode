# Structuring source code in JavaScript

## Preventing nameconflicts

In order to prevent name conflicts you can store all the variables, function, objects and everything else that you have inside a file inside an object.

```JavaScript
// Inside script1.js
let SCRIPT1_OBJECT = new Object();
SCRIPT1_OBJECT.MAX = 4711;
SCRIPT1_OBJECT.add = (x, y) => {
    return x + y
}

console.log(SCRIPT1_OBJECT.MAX);
```

```JavaScript
// Inside script2.js
let SCRIPT2_OBJECT = new Object();
SCRIPT2_OBJECT.MAX = 2345;
SCRIPT2_OBJECT.add = (numbers) => {
    let result = 0;
    foreach(number => result += number)

    return result;
}

console.log(SCRIPT2_OBJECT.MAX);
```

## IIFE & Closures

Closures are functions that return other functions. You can use them in order to set properties, methods etc. private. Example:

```JavaScript
function counter(name){
    let i = 0;
    return function(){
        i++;
        console.log(`${name} : ${i}`);
    }
}

let counter1 = counter("First counter")
let counter2 = counter("Second counter")

counter1(); // 1
counter1(); // 2
console.log(counter1.i); // undefined

counter2(); // 1
counter2(); // 2
console.log(counter2.i); // undefined
```

An IIFE ( immediately-invoked function expression ) is a function that executs itself:

```JavaScript
(function(){
    // Code
})();
```

Here is an example of how you can build private properties & methods for a "module":

```JavaScript
var Module = Module || (function(){
    // private Variable
    let x = 5;
    // private Variable
    let y = 4711;

    // Open API
    return {
        // public function
        getX : function(){
            return x;
        },
        // public function
        getY : function(){
            return y;
        }
    }
})();

console.log(Module.getX());
console.log(Module.getY())
Module.x = 888;
Module.y = 888;
console.log(Module.getX());
console.log(Module.getY())
```

You can see that the we have two private variable that can't be accessed from the outside ( x & y ). The properties & methods that we want to be public are simply written inside the open API.

## Revealing Module Pattern

The idea behind this design pattern is that a method that has to be exported should be defined inside an exporting object that will be returned ( building a reference to the method that has to be exported ).

```JavaScript
var Module = Module || (function(){
    let x = 5;
    let y = 4711;
    function getX(){
        return x;
    }
    function getY(){
        return y;
    }
    function print(){
        console.log(`x : ${getX()} || y : ${getY()}`);
    }

    // Return references to the methods
    return {
        getX : getX,
        getY : getY,
        print : print
    }
})();

Module.print();
```

The methods that have to be exported are referenced inside an exporting object that is later returned.

## Importing modules

In order to import modules you have to give them as arguments like you would to any other function.

```JavaScript
var ModuleB = ModuleB || (function(){
    function printHelloWorld(){
        console.log("Hello World.");
    }
    return{
        printHelloWorld : printHelloWorld
    }
})();

var ModuleA = ModuleA || (function(moduleB){
    let x = 5;
    let y = 4711;

    function getX(){
        return x;
    }

    function getY(){
        return y;
    }

    function print(){
        moduleB.printHelloWorld();
        console.log(`x : ${getX()} || y : ${getY()}`);
    }

    return{
        getX : getX,
        getY : getY,
        print : print
    }
})(ModuleB);

ModuleA.print()
```

## Module Augmentation

There are two types of module augmentation. You can use loose or tight augmentation. Loose augmentation is used when the source code hasn't been loaded yet, so you might have the first version of a module so it can be used asynchronously:

```JavaScript
// Lose augmentation, that means that this is the first file loaded.
var ModuleA = ModuleA || (function(moduleA){
    // Adding properties & methods
    let x = 5;
    let y = 4711;

    moduleA.getX = function(){
        return x;
    }

    moduleA.getY = function(){
        return y;
    }

    // Returning the module 
    return moduleA;
})(ModuleA || {});
```

Tight augmentation on the other hand expects the module to already be loaded.

```JavaScript
// Tight augmentation
var ModuleA = (function(moduleA){
    // Adding properties & methods
    moduleA.print = function(){
        console.log(`x : ${moduleA.getX()} || y : ${moduleA.getY()}`);
    }

    return moduleA;
})(ModuleA);

ModuleA.print()
```

## AMD ( Asynchronous Module Definition )

You can use AMD to define modules as well ( by using ``` define ``` keyword ):

```JavaScript
// AMD
define(
    "ModuleA", // Name of the module
    ["ModuleB"], // modules that have to be imported
    function(moduleB){ // Function of the module
        let x = 5;
        let y = 4711;

        let module = {
            getX : function(){
                return x;
            },
            getY : function(){
                return y;
            },
            print : function(){
                moduleB.printHelloWorld()
                console.log(`x : ${this.getX()} || y : ${this.getY()}`);
            }
        }

        return module;
    }
);

define(
    "ModuleB",
    new Array(),
    function(){
        let module = {
            printHelloWorld : function(){
                console.log("Hello World.");
            }
        }

        return module;
    }
);
```
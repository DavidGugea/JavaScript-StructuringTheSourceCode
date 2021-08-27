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
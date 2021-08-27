var ModuleA = (function(moduleA){
    // Adding properties & methods
    moduleA.print = function(){
        console.log(`x : ${moduleA.getX()} || y : ${moduleA.getY()}`);
    }

    return moduleA;
})(ModuleA);

ModuleA.print()
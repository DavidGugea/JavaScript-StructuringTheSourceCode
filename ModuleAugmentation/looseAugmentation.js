// Lose augmentation that means that this is the first file loaded.
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
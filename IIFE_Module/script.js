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
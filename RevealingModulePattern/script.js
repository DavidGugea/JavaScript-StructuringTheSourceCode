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
function counter(name){
    let i = 0;
    return function(){
        i++;
        console.log(`${name} : ${i}`);
    }
}

let counter1 = counter("First counter")
let counter2 = counter("Second counter")

counter1();
counter1();
console.log(counter1.i);

counter2();
counter2();
console.log(counter2.i);
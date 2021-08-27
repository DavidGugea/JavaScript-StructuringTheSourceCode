let SCRIPT2_OBJECT = new Object();
SCRIPT2_OBJECT.MAX = 2345;
SCRIPT2_OBJECT.add = (numbers) => {
    let result = 0;
    foreach(number => result += number)

    return result;
}

console.log(SCRIPT2_OBJECT.MAX);
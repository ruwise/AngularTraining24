function helloWorld() {
    return "Hello world";
}

add = (...numbers) => {
    let sum = 0;
    numbers.forEach(a =>  sum = sum + a );
    return sum;
}

sub = (a, b) => a - b;

mul = (...numbers) => {
    let result = 1;
    numbers.forEach(a => result = result * a);
    return result;
}

div = (a, b) => a / b;
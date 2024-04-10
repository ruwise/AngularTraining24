console.log("Hello world!")
// normnal methods
function addNumbers(val1: number, val2: number): number {
    return val1 + val2;
}

console.log(addNumbers(10, 5));

// optional parameters 
function userInfo(id: number, name: string, email?: string) {
    console.log("id: "+id);
    console.log("name: "+name);
    if(email!=undefined){
        console.log("email: "+email);
    }
}

userInfo(101, "Ruwise");
userInfo(102, "yeldos", "yeldhos@gmail.com");

// default params
function calculateDiscount(price: number, discount: number = 0.5): number{
    return price * discount;
}

console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 0.3));

// enum

enum myConstants {
    PI = 3.14,
    UNIT = 'Meter'
}

console.log(myConstants.PI + myConstants.UNIT);
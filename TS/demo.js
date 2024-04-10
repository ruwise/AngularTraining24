console.log("Hello world!");
// normnal methods
function addNumbers(val1, val2) {
    return val1 + val2;
}
console.log(addNumbers(10, 5));
// optional parameters 
function userInfo(id, name, email) {
    console.log("id: " + id);
    console.log("name: " + name);
    if (email != undefined) {
        console.log("email: " + email);
    }
}
userInfo(101, "Ruwise");
userInfo(102, "yeldos", "yeldhos@gmail.com");
// default params
function calculateDiscount(price, discount) {
    if (discount === void 0) { discount = 0.5; }
    return price * discount;
}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 0.3));
// enum
var myConstants;
(function (myConstants) {
    myConstants[myConstants["PI"] = 3.14] = "PI";
    myConstants["UNIT"] = "Meter";
})(myConstants || (myConstants = {}));
console.log(myConstants.PI + myConstants.UNIT);

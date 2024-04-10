// class Person {
//     public id: number;
//     constructor(id: number){
//         this.id = id;
//         console.log("Class initialized!");
//         console.log("Person id is :"+this.id);
//     }
// }
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this.id = id;
        this.name = name;
    }
    return Customer;
}());
var Demo = /** @class */ (function () {
    function Demo() {
        this.customers = [];
    }
    Demo.prototype.createCustomer = function (id, name) {
        var cust = new Customer(id, name);
        this.customers.push(cust);
        return cust;
    };
    Demo.prototype.listCustomers = function () {
        this.customers.forEach(function (cust) {
            console.log("id: " + cust.id + ", name: " + cust.name);
        });
    };
    Demo.prototype.deleteCustomer = function (id) {
        console.log("deleting user with id: " + id);
        var temp = this.customers.filter(function (cust) { return cust.id != id; });
        this.customers = temp;
    };
    Demo.prototype.modifyCustomer = function (id, name) {
        console.log("Updating name of the customer with id: " + id + " to " + name);
        this.customers.forEach(function (cust) {
            if (cust.id == id) {
                cust.name = name;
            }
        });
    };
    return Demo;
}());
var demo = new Demo();
demo.createCustomer(100, "Alice");
demo.createCustomer(101, "Bob");
demo.createCustomer(102, "Joe");
demo.createCustomer(103, "John");
console.log("List all customers >>>>");
demo.listCustomers();
demo.deleteCustomer(101);
console.log("After Delete >>>>");
demo.listCustomers();
demo.modifyCustomer(102, "Billy");
console.log("After Modify >>>>");
demo.listCustomers();

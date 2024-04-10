// class Person {

//     public id: number;

//     constructor(id: number){
//         this.id = id;
//         console.log("Class initialized!");
//         console.log("Person id is :"+this.id);
//     }
// }

class Customer{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        console.log("Created customer with id: "+this.id+" and Name: "+this.name);
    }
}

class Demo {
    
    private customers: Customer[] = [];
    
    createCustomer(id: number, name: string): Customer{
        let cust = new Customer(id, name);
        this.customers.push(cust);
        return cust;
    }

    listCustomers() {
        this.customers.forEach(cust => {
            console.log("id: "+cust.id+", name: "+cust.name);
        });
    }
    
    deleteCustomer(id: number) {
        console.log("deleting user with id: "+id);
        let temp = this.customers.filter(cust => cust.id != id);
        this.customers = temp;
    }

    modifyCustomer(id: number, name:string){
        console.log("Updating name of the customer with id: "+id+" to "+name)
        this.customers.forEach(cust => {
            if (cust.id == id){
                cust.name = name;
            }
        });
    }

}


let demo = new Demo();

demo.createCustomer(100, "Alice");
demo.createCustomer(101, "Bob");
demo.createCustomer(102, "Joe");
demo.createCustomer(103, "John");

console.log("List all customers >>>>");
demo.listCustomers();

demo.deleteCustomer(101);
console.log("After Delete >>>>");
demo.listCustomers()

demo.modifyCustomer(102, "Billy")
console.log("After Modify >>>>");
demo.listCustomers()




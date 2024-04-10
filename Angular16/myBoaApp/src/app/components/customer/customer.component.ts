import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  custArray: Array<Customer> = new Array();
  model: Customer = new Customer("", 0);
  buttonName = "Add";
  isEdit: boolean = false;
  upIndex: number = 0;
  public createCustomer(): void {
    if (this.isEdit) {
        this.custArray[this.upIndex].name = this.model.name;
        this.custArray[this.upIndex].age = this.model.age;
    } else {
      console.log("Create customer even was fired!");
      this.custArray.push(new Customer(this.model.name, this.model.age));
      console.log(JSON.stringify(this.custArray));
    }
    this.clearModel();
    this.buttonName = "Add";
    this.isEdit = false;
  }
  public editCustomer(index: number): void {
    this.isEdit = true;
    this.upIndex = index;
    let cust = this.custArray[index];
    this.model.name = cust.name;
    this.model.age = cust.age;
    this.buttonName = "Update";
    console.log("customer updated!");
  }
  public deleteCustomer(index: number): void {
    this.custArray.splice(index, 1);
    console.log("Customer deleted");
  }

  private clearModel() {
    this.model.name = "";
    this.model.age = 0;
  }
}

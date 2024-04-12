import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userList: User[] | undefined;
  defaultUser: User = new User("1000", "", "", "");
  buttonName = "Add User";
  isEdit: boolean = false;
  id: number = 1000;
  showUsers: boolean = false;
  constructor(private _httpService: UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  // Fetch user details
  getUserDetails() {
    this._httpService.getAllUsers().subscribe((res: User[]) => {
      console.log("get service response-->" + res);
      this.userList = res;
      this.userList.sort((a, b) => Number(a.id) - Number(b.id));
    })
  }
  showAllUsers(){
    this.getUserDetails();
    this.showUsers = true;
  }

  // add new user
  createUser() {
    if (this.defaultUser.first_name.trim().length == 0
      || this.defaultUser.last_name.trim().length == 0
      || this.defaultUser.email.trim().length == 0) {
      return;
    }
    if (this.isEdit) {
      this.updateUser();
    } else {
      if(this.userList != undefined && this.userList.length > 0){
        this.id = Number(this.userList[this.userList.length-1].id);
      }
      this.id += 1;
      let user = new User(this.id.toString(), this.defaultUser.first_name, this.defaultUser.last_name, this.defaultUser.email);
      this._httpService.createNewUSer(user).subscribe((res: User) => {
        console.log("User created!");
        console.log(JSON.stringify(res));
        this.getUserDetails();
      });
    }
    this.clearForm();
  }

  // updae the selected user
  updateUser(){
    this._httpService.updateUser(this.defaultUser).subscribe((res: User) => {
      console.log("User updated!");
      console.log(JSON.stringify(res));
      this.getUserDetails();
    });
  }

  // edit user details based on id
  editUser(user: User) {
      this.defaultUser.id = user.id;
      this.defaultUser.first_name = user.first_name;
      this.defaultUser.last_name = user.last_name;
      this.defaultUser.email = user.email;
      this.isEdit = true;
      this.buttonName = "Update User";

  }

  // delete user by id
  deleteUser(id: string) {
    this._httpService.deleteUser(id).subscribe((res: User) => {
      console.log("User updated!");
      console.log(JSON.stringify(res));
      this.getUserDetails();
    });
  }

  // hide user list and clear the form fields
  clearUserList() {
    this.showUsers = false;
    this.clearForm();
  }

  // clear form fields
  clearForm() {
    this.defaultUser.first_name = "";
    this.defaultUser.last_name = "";
    this.defaultUser.email = "";
    this.buttonName = "Add User";
    this.isEdit = false;
  }
}

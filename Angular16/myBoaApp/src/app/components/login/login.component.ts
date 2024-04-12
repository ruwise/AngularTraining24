import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public username: string = "";
  public password: string = "";
  public message: string = "";
  constructor(private _httpService: UserService, private router: Router) { }

  login(){
    // Fetch user details
    this._httpService.getAllUsers().subscribe((res: User[]) => {
      console.log("get service response-->" + res);
      let usr = res.filter(u => u.username == this.username && u.password == this.password);
      if(usr == undefined || usr.length == 0){
        this.message = "Invalid username or password!"
        return;
      }else{
        alert("Welcome "+usr[0].first_name+" "+usr[0].last_name);
        this.router.navigateByUrl("dashboard/home");
      }
    })
  }

  logut(){
    this.router.navigateByUrl("login");
  }

  reset(){
    this.username = "";
    this.password = "";
    this.message = "";
  }

}

import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  getData: any[] | undefined;

  constructor(private _httpService: UserService) { }

  ngOnInit(): void {
  }

  // Fetch user details
  getUserDetails(){


    this._httpService.getUsers().subscribe((res :any[])=>{

         console.log("get service response-->" +res);
         this.getData=res;

    })

}
}

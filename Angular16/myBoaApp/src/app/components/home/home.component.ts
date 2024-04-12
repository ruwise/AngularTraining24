import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message = "Angular application running"
  clickMessage: string = 'Training Status';
  onClickMe() {

    this.clickMessage = 'Training is on';
  }
}

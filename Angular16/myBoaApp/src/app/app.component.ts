import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myBoaApp';
  message = "Angular application running"
  today: Date = new Date();
  clickMessage: string = 'Training Status';

  onClickMe() {

    this.clickMessage = 'Training is on';
  }
}

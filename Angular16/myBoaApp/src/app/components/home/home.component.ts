import { Component } from '@angular/core';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message = "Angular application running"
  clickMessage: string = 'Training Status';
  constructor(private logger: NGXLogger) {
    this.logger.trace('Tracing is colored blue');
    this.logger.debug('Multiple', 'Argument', 'support');
    this.logger.info('Info helps the UX');
    this.logger.log('Your log message goes here');
    this.logger.warn('Warnings are highlighted');
  }
  onClickMe() {
    this.clickMessage = 'Training is on';
    this.logger.debug(this.clickMessage);
    
  }
}

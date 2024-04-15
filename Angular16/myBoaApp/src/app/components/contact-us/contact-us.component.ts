import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  withoutSignal() {
    let x = 3;
    let y = 5;
    let z = x + y;
    console.log(z);
    x = 5;
    console.log(z);
  }

  withSignal(){
    const x = signal(5);
    const y = signal(3);
    const z = computed(() => x() + y());
    console.log(z()); // 8
    x.set(10);
    console.log(z()); // 13
  }
}

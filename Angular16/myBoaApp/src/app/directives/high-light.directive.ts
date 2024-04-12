import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  el: ElementRef;
  @Input() value : string | undefined;
  constructor(el: ElementRef) { 

    // static method
    // el.nativeElement.style.backgroundColor = 'red';

    this.el = el;

  }

  ngOnInit(){
    console.log("Value of background color is set from input. ie: "+this.value);
    this.el.nativeElement.style.backgroundColor = this.value;

    
  }
}

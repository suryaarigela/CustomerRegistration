import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appTelephoneMask]'
})
export class TelephoneMaskDirective {
  private el: any;
  constructor( private elementRef: ElementRef) { 
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('blur', ['$event.target'])
  formatPhone(s){
    var s2 = (""+s.value).replace(/\D/g, '');
    console.log("******** "+s.value);
    var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
    this.el.value= (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3]; 
  }

}

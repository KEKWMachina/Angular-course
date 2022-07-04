import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {
  @HostBinding('class.open') status: boolean = false;
  @HostListener('click') onClick(): void {
    this.status = !this.status;
  }
}

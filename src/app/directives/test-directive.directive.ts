import { getCurrencySymbol } from '@angular/common';
import {
  Directive,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appTestDirective]',
})
export class TestDirective implements OnInit {
  @Input() startingColor: string = 'green';
  @Input() onMouseEnterColor: string = 'red';
  @Input() onMouseLeaveColor: string = 'blue'
  @HostBinding('style.background-color') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.startingColor;
  }

  @HostListener('mouseenter') makeElBlue() {
    this.backgroundColor = this.onMouseEnterColor;
  }

  @HostListener('mouseleave') makeElRed() {
    this.backgroundColor = this.onMouseLeaveColor;
  }
}

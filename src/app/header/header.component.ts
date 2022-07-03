import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  selectSection(event: Event) {
    const input = event.target as HTMLElement;

    this.sectionSelected.emit(input.innerText);
  }
}

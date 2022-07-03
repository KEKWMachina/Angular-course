import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeSection: string = 'Shopping List';

  onSectionSelected(section: string): void {
    this.activeSection = section;
  }
}

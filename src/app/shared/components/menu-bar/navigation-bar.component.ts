import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
})
export class NavigationBarComponent {
  @Input() userName: string;
}

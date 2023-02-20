import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-presentation',
  template: `
    <div class="flex flex-col items-center justify-center mb-12">
      <span class="font-light">Get your next</span>
      <div class="text-container">
        <h2 class="text-5xl font-bold">Awesome Inspiration</h2>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePresentationComponent {}

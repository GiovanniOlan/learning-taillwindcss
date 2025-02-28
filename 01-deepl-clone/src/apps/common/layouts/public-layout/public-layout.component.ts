import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>public-layout works!</p>
    <router-outlet></router-outlet>
  `,
})
export default class PublicLayoutComponent { }

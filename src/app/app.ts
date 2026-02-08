import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Header, Home],
  template: `
    <app-header />
    <app-home />
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class App {
  protected readonly title = signal('angular-app');
}

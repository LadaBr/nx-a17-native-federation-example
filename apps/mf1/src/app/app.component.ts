import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import {RouterOutlet} from "@angular/router";
import {TestComponent} from "./test/test.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterOutlet, TestComponent],
  selector: 'native-federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf1';
  constructor() {
    console.log("RENDERING APP COMPONENT");
  }
}

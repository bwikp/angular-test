import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HousingComponent } from "./housing/housing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HousingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test';
}

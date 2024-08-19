import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from './user/nav/nav.component';
import { HomeComponent } from './user/home/home.component';
import { FooterComponent } from './user/footer/footer.component';
import '@fortawesome/fontawesome-free/css/all.min.css';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent,FooterComponent,HomeComponent ,RouterLinkActive,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ANGULAR';
}

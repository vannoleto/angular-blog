import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent} from './pages/home/home.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { ContentComponent } from "./pages/content/content.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, MenuTitleComponent, HomeComponent, BigCardComponent, SmallCardComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}

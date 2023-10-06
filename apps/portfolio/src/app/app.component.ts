import { Component } from '@angular/core';
import {SkillsComponent} from '@portfolio/skills';
@Component({
  standalone: true,
  imports: [SkillsComponent],
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
}

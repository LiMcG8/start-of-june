import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NewsComponent } from "../news/news.component";

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NewsComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent {

}

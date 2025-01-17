import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from "../news/news.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NewsComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent {

}

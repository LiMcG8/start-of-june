import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLinkActive],
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent {

  selectedItem: string = '';

}

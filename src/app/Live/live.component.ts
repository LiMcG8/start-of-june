import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent {

  selectedItem: string = '';

}

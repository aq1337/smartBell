import { Component } from '@angular/core';

@Component({
  selector: 'app-bell',
  standalone: true,
  imports: [],
  templateUrl: './bell.component.html',
  styleUrl: './bell.component.css'
})
export class BellComponent {
   isBellFilled: boolean = false
   bellClick() {
    this.isBellFilled = !this.isBellFilled;
    setTimeout(() => {
      // Blende das outlined-SVG wieder aus
      this.isBellFilled = false;
    }, 2000);
   }
}

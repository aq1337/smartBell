import { Component } from '@angular/core';

@Component({
  selector: 'app-opener',
  standalone: true,
  imports: [],
  templateUrl: './opener.component.html',
  styleUrl: './opener.component.css'
})
export class OpenerComponent {
  isDoorOpened = false
  onDoorClick(){
    this.isDoorOpened = !this.isDoorOpened
    setTimeout(() => {
      // Blende das outlined-SVG wieder aus
      this.isDoorOpened = false;
    }, 2000);
  }
}

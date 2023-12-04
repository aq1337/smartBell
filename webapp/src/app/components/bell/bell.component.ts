import { Component, inject } from '@angular/core';
import { BellService } from '../../services/bell.service';

@Component({
  selector: 'app-bell',
  standalone: true,
  imports: [],
  templateUrl: './bell.component.html',
  styleUrl: './bell.component.css',
})
export class BellComponent {
  bellService: BellService = inject(BellService);
  isBellFilled: boolean = false;
  bellClick() {
    this.bellService.postBell("Glocke")
    this.isBellFilled = !this.isBellFilled;
    setTimeout(() => {
      // Blende das outlined-SVG wieder aus
      this.isBellFilled = false;
    }, 2000);
  }
}

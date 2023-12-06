import { Component, inject } from '@angular/core';
import { BellService } from '../../services/bell.service';

@Component({
  selector: 'app-opener',
  standalone: true,
  imports: [],
  templateUrl: './opener.component.html',
  styleUrl: './opener.component.css'
})
export class OpenerComponent {
  bellService: BellService = inject(BellService)

  isDoorOpened = false
  onDoorClick(){
    this.bellService.openDoor("Tür")
    this.isDoorOpened = true;
    setTimeout(() => {
      this.isDoorOpened = false;
    }, 2000);
  }
}

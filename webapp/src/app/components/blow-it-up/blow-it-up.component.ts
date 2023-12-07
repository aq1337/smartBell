import { Component } from '@angular/core';

@Component({
  selector: 'app-blow-it-up',
  standalone: true,
  imports: [],
  templateUrl: './blow-it-up.component.html',
  styleUrl: './blow-it-up.component.css'
})
export class BlowItUpComponent {
  isFlameFilled = false
  blowUpClick(){
    console.log("boom")
  }
}

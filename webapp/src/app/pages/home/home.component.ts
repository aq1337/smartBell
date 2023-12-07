import { Component } from '@angular/core';
import { OpenerComponent } from '../../components/opener/opener.component';
import { BellComponent } from '../../components/bell/bell.component';
import { BlowItUpComponent } from '../../components/blow-it-up/blow-it-up.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OpenerComponent, BellComponent,BlowItUpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

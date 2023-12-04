import { Component } from '@angular/core';
import { OpenerComponent } from '../../components/opener/opener.component';
import { BellComponent } from '../../components/bell/bell.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OpenerComponent, BellComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { SettingsMenuComponent } from '../../components/settings-menu/settings-menu.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [SettingsMenuComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}

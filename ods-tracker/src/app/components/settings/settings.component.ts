import { Component } from '@angular/core';
import { SwitchTypeEnum } from '../../models/enums/switch-type.enum';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: [ './settings.component.scss' ],
})
export class SettingsComponent {
  public isModalOpen: boolean = false;

  public switchTypeEnum: typeof SwitchTypeEnum = SwitchTypeEnum;
}

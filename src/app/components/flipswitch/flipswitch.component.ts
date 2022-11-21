import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwitchTypeEnum } from '../../models/enums/switch-type.enum';
import { SwitchInterface } from '../../models/interfaces/switch.interface';

@Component({
  selector: 'app-flipswitch',
  templateUrl: './flipswitch.component.html',
  styleUrls: [ './flipswitch.component.scss' ],
})
export class FlipswitchComponent implements OnInit {
  @Input()
  public type: SwitchTypeEnum = SwitchTypeEnum.NONE;

  public constructor(
    public translateService: TranslateService,
  ) {}

  public ngOnInit(): void {
    this.isThemeType = this.type === SwitchTypeEnum.THEME;

    this.options = {
      options: {
        on: this.isThemeType ? 'SWITCH.THEME.ON' : 'SWITCH.LANGUAGE.ON',
        off: this.isThemeType ? 'SWITCH.THEME.OFF' : 'SWITCH.LANGUAGE.OFF',
      },
      id: this.isThemeType ? 'themeBtn' : 'languageBtn',
      switch: this.isThemeType ? this.changeTheme : this.changeLanguage,
    };
  }

  public isThemeType: boolean = false;

  public isLightMode: boolean = true;
  public isPortuguese: boolean = this.translateService.currentLang === 'pt';

  public options: SwitchInterface = {
    options: {
      on: '',
      off: '',
    },
    id: '',
    switch: this.changeTheme,
  };

  public changeTheme(): void {
    const currentTheme = this.isLightMode ? 'light' : 'dark';
    const newTheme = !this.isLightMode ? 'light' : 'dark';

    const app = document.getElementById(currentTheme);

    app!.id = newTheme;
    this.isLightMode = !this.isLightMode;
  }

  public changeLanguage(): void {
    const lang = this.isPortuguese ? 'pt' : 'en';

    this.translateService.use(lang);

    this.isPortuguese = !this.isPortuguese;
  }
}

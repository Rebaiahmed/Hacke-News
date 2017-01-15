import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../Services/Settings.service' ;
import { Settings } from '../models/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: 'app/settings/settings.component.html',
  styleUrls: ['app/settings/settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(private _settingsService: SettingsService) {
    this.settings = this._settingsService.settings;
  }

  ngOnInit() {
  }

  closeSettings() {
    this._settingsService.toggleSettings();
  }

  toggleOpenLinksInNewTab() {
    this._settingsService.toggleOpenLinksInNewTab();
  }

  selectTheme(theme:any) {
    this._settingsService.setTheme(theme);
  }
}
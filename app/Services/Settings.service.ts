
import { Injectable } from '@angular/core';
import { Settings} from '../models/Settings'


@Injectable()
export class SettingsService {



 settings: Settings = {
    showSettings : false,
    openLinkInNewTab: localStorage.getItem("openLinkInNewTab") ? JSON.parse(localStorage.getItem("openLinkInNewTab")) : false,
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : 'default'
};


  toggleSettings() {
    this.settings.showSettings = !this.settings.showSettings;
  }

  toggleOpenLinksInNewTab() {
    this.settings.openLinkInNewTab = !this.settings.openLinkInNewTab;
    localStorage.setItem("openLinkInNewTab", JSON.stringify(this.settings.openLinkInNewTab));
  }

  setTheme(theme:any) {
    this.settings.theme = theme;
    localStorage.setItem("theme", this.settings.theme);
}

     constructor() { }
}
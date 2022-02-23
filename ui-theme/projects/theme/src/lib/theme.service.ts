import { Injectable } from '@angular/core';
import {UiTheme, defaultTheme, greenTheme, redTheme} from './models/ui-theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: UiTheme = defaultTheme;
  constructor() { }

  getTheme(): UiTheme {
    return this.activeTheme;
  }

  setTheme(themeName: string, customThemeData?: any): void {
    switch (themeName) {
      case 'custom' :
        this.activeTheme = this.createDynamicTheme(customThemeData);
        break;
      case 'red' :
        this.activeTheme = redTheme;
        break;
      case 'green' :
        this.activeTheme = greenTheme;
        break;
      default:
        this.activeTheme = defaultTheme;
    }
    console.log('themeName => ', themeName);
    this.insertThemeColors(this.activeTheme);
  }

  createDynamicTheme(customThemeData): UiTheme {
    let customTheme: UiTheme;
    customTheme = {
      name: 'custom',
      headerBackColor: customThemeData?.headerBackColor ? customThemeData?.headerBackColor : defaultTheme.headerBackColor,
      headerTextColor: customThemeData?.headerTextColor ? customThemeData?.headerTextColor : defaultTheme.headerTextColor,
      primaryColor: customThemeData.primaryColor ? customThemeData?.primaryColor : defaultTheme.primaryColor,
      primaryHoverColor: customThemeData?.primaryHoverColor ? customThemeData?.primaryHoverColor : defaultTheme.primaryHoverColor,
      textColor: customThemeData?.textColor ? customThemeData?.textColor : defaultTheme.textColor,
      textLinkColor: customThemeData?.textLinkColor ? customThemeData?.textLinkColor : defaultTheme.textLinkColor,
      backgroundColor: customThemeData?.backgroundColor ? customThemeData?.backgroundColor : defaultTheme.backgroundColor,
      buttonPrimaryColor: customThemeData?.buttonPrimaryColor ? customThemeData?.buttonPrimaryColor : defaultTheme.buttonPrimaryColor,
      buttonPrimaryHoverColor: customThemeData?.buttonPrimaryHoverColor ? customThemeData?.buttonPrimaryHoverColor : defaultTheme.buttonPrimaryHoverColor,
      buttonSecondaryColor: customThemeData?.buttonSecondaryColor ? customThemeData?.buttonSecondaryColor : defaultTheme.buttonSecondaryColor,
      buttonSecondaryHoverColor: customThemeData?.buttonSecondaryHoverColor ? customThemeData?.buttonSecondaryHoverColor : defaultTheme.buttonSecondaryHoverColor,
      bodyBackgroudColor: customThemeData?.bodyBackgroudColor ? customThemeData?.bodyBackgroudColor : defaultTheme.bodyBackgroudColor
    };
    return customTheme;
  }

  insertThemeColors(themeData: UiTheme): void {
    let rootCSS = ':root { \n' +
    '--theme-name: ' + themeData.name + ';\n' +
    '--header-back-color: ' + themeData.headerBackColor + ';\n' +
    '--header-text-color: ' + themeData.headerTextColor + ';\n' +
    '--primary-color: ' + themeData.primaryColor + ';\n' +
    '--primary-hover-color: ' + themeData.primaryHoverColor + ';\n' +
    '--text-color: ' + themeData.textColor + ';\n' +
    '--text-link-color: ' + themeData.textLinkColor + ';\n' +
    '--background-color: ' + themeData.backgroundColor + ';\n' +
    '--button-primary-color: ' + themeData.buttonPrimaryColor + ';\n' +
    '--button-primary-hover-color: ' + themeData.buttonPrimaryHoverColor + ';\n' +
    '--button-secondary-color: ' + themeData.buttonSecondaryColor + ';\n' +
    '--button-secondary-hover-color: ' + themeData.buttonSecondaryHoverColor + ';\n' +
    '--body-background-color: ' + themeData.bodyBackgroudColor + ';\n' +
    '}';
    let style = document.createElement('style');
    style.id = themeData.name;
    style.appendChild(document.createTextNode(rootCSS));
    document.head.appendChild(style);
    console.log(document.head);
  }

}

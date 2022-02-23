import { Component} from '@angular/core';
import {ThemeService} from 'theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-functions';
  currentTheme;
  constructor(private themeService: ThemeService) {
    // this.currentTheme = this.themeService.setTheme('');
    // this.currentTheme = this.themeService.setTheme('green');
    // this.currentTheme = this.themeService.setTheme('red');
    const themeData = {
      headerBackColor: '#440000'
    };
    this.currentTheme = this.themeService.setTheme('custom', themeData);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}

import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { ThemeService } from './theme.service';


@NgModule({
  declarations: [ThemeComponent],
  imports: [
  ],
  providers: [ThemeService],
  exports: [ThemeComponent]
})
export class ThemeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { DuelModule } from '../../../src/duel.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DuelModule
  ],
  providers: [
    {provide: 'environment', useValue: environment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

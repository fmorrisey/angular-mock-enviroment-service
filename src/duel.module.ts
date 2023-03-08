import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './environments/environment';


@NgModule({
    declarations: [
      DashboardComponent,
    ],
    imports: [
      BrowserModule,
      environment.services
    ],
    exports: [
        DashboardComponent
    ],
    providers: []
})

export class DuelModule { }
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../components/header/header.component';
import { BodyComponent } from '../components/body/body.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AngularMaterialModule } from '../material.module';
import { TimeagoModule } from 'ngx-timeago';
import { DateAgoPipe } from '../pipes/date-ago.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,  
    DateAgoPipe  
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TimeagoModule.forRoot(),
    
  ]
})
export class DashboardModule { }

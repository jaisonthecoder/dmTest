import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PaymentBlockComponent } from './components/payment-block/payment-block.component';
import { EventBlockComponent } from './components/event-block/event-block.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgbCarouselConfig, NgbCarouselModule, NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { TranslocoRootModule } from '../../transloco-root.module';


@NgModule({
  declarations: [HomeComponent, HomeComponent, PaymentBlockComponent, EventBlockComponent, HomeSliderComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbCarouselModule,
    NgbNavModule,
    TranslocoRootModule
  ],
  providers:[
    NgbCarouselConfig, NgbNavConfig
  ]
})
export class LandingPageModule { }

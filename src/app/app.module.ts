import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoRootModule } from './transloco-root.module';
import { CommonFooterComponent } from './components/common-footer/common-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavigationComponent,
    CommonFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FontAwesomeModule, TranslocoRootModule
  ],
  exports:[TranslocoRootModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

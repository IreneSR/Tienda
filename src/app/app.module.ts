import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { VowelsPipe } from './pipes/vowels.pipe';
import { IvaPipe } from './pipes/iva.pipe';
import { AlertPriceDirective } from './directives/alert-price.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    NavComponent,
    ProductComponent,
    ProductsComponent,
    VowelsPipe,
    IvaPipe,
    AlertPriceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

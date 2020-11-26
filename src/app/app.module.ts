import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import{FormsModule} from '@angular/forms';
import { DonMaltusAboutComponent } from './don-maltus-about/don-maltus-about.component';
import { DonMaltusBeersComponent } from './don-maltus-beers/don-maltus-beers.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    DonMaltusAboutComponent,
    DonMaltusBeersComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

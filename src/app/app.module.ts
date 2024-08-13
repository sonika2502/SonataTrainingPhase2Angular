import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchNamesComponent } from './search-names/search-names.component';
import { FormsModule } from '@angular/forms';
import { SearchImagesComponent } from './search-images/search-images.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchNamesComponent,
    SearchImagesComponent,
    ProductDetailsComponent,
    UsersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

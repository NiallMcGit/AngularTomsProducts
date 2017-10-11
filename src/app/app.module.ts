import { ConvertoSpaces } from './shared/convert-to-spaces.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertoSpaces,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

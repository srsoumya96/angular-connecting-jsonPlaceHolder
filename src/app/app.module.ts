import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CustomModule, HttpClientModule ],
  declarations: [ AppComponent, FirstComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RestService]
})
export class AppModule { }

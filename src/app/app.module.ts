import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./Components/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import { PasswordModule } from 'primeng/password';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PasswordModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

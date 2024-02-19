import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './component/title/title.component';
import { BigImgComponent } from './component/big-img/big-img.component';
import { HomeComponent } from './page/home/home.component';
import { CardsComponent } from './component/cards/cards.component';
import { MenuComponent } from './component/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    BigImgComponent,
    HomeComponent,
    CardsComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

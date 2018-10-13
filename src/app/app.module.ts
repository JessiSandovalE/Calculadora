import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadboardComponent } from './shared/headboard/headboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadboardComponent,
    FooterComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsComponent } from './views/lessons/lessons.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { FooterComponent } from './views/shared/footer/footer.component';

/* Importar rutas */

import {ROUTES} from './app.routes';
import { FormComponent } from './views/lessons/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, {useHash:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { BlogComponent } from './views/blog/blog.component';
import { ShopComponent } from './views/shop/shop.component';
import { HathaYogaComponent } from './views/list/hatha-yoga/hatha-yoga.component';
import { VinyasaYogaComponent } from './views/list/vinyasa-yoga/vinyasa-yoga.component';
import { MeditacionComponent } from './views/list/meditacion/meditacion.component';
import { PostpartoComponent } from './views/list/postparto/postparto.component';
import { YogaEmpresarialComponent } from './views/list/yoga-empresarial/yoga-empresarial.component';
import { PrenatalComponent } from './views/list/prenatal/prenatal.component';
import { KidsComponent } from './views/list/kids/kids.component';

import { ListComponent } from './views/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FormComponent,
    BlogComponent,
    ShopComponent,
    HathaYogaComponent,
    VinyasaYogaComponent,
    MeditacionComponent,
    PostpartoComponent,
    YogaEmpresarialComponent,
    PrenatalComponent,
    KidsComponent,
 
    ListComponent
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

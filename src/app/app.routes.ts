import { from } from "rxjs";
import {Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {LessonsComponent} from './views/lessons/lessons.component';
import { FormComponent } from './views/lessons/form/form.component';
/* import { MeditacionComponent } from './views/meditacion/meditacion.component';
 */

export const ROUTES: Routes = [
    {path:'home', component: HomeComponent},
  /*   {path:'meditacion', component: MeditacionComponent}, */
    {path:'lessons', component: LessonsComponent},
    {path:'lessons-form', component: FormComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'},
    

];
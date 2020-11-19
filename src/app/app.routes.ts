import { from } from "rxjs";
import {Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {LessonsComponent} from './views/lessons/lessons.component';
import { FormComponent } from './views/lessons/form/form.component';
/* import { MeditacionComponent } from './views/meditacion/meditacion.component';
 */
import { BlogComponent } from './views/blog/blog.component';
import { ShopComponent } from './views/shop/shop.component';
import { HathaYogaComponent } from './views/list/hatha-yoga/hatha-yoga.component';
import { VinyasaYogaComponent } from './views/list/vinyasa-yoga/vinyasa-yoga.component';
import { MeditacionComponent } from './views/list/meditacion/meditacion.component';
import { PostpartoComponent } from './views/list/postparto/postparto.component';
import { YogaEmpresarialComponent } from './views/list/yoga-empresarial/yoga-empresarial.component';
import { PrenatalComponent } from './views/list/prenatal/prenatal.component';
import { KidsComponent } from './views/list/kids/kids.component';
import { ContactComponent } from './views/contact/contact.component';
import { MembershipComponent } from './views/membership/membership.component';

import { ListComponent } from './views/list/list.component';

export const ROUTES: Routes = [
    {path:'home', component: HomeComponent},
  /*   {path:'meditacion', component: MeditacionComponent}, */
    {path:'lessons/:vista', component: LessonsComponent},
    {path:'lessons-form', component: FormComponent},

    {path:'contact', component: ContactComponent},
    {path:'membership', component: MembershipComponent},
    {path:'blog', component: BlogComponent},
    {path:'shop', component: ShopComponent},
    {path:'hatha-yoga', component: HathaYogaComponent},
    {path:'vinyasa-yoga/:vista', component: VinyasaYogaComponent},
    {path:'meditacion/:vista', component: MeditacionComponent},
    {path:'postparto', component: PostpartoComponent},
    {path:'empresarial', component: YogaEmpresarialComponent},
    {path:'prenatal', component: PrenatalComponent},
    {path:'yoga-niños', component: KidsComponent},
    {path:'list/:vista', component: ListComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'},
    

];
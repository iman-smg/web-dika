import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainmenuComponent} from './mainmenu/mainmenu.component';
import {ServiksComponent} from './serviks/serviks.component';
import {KankerServiksComponent} from './kanker-serviks/kanker-serviks.component';
import {FaktorResikoComponent} from './faktor-resiko/faktor-resiko.component';
import {GejalaComponent} from './gejala/gejala.component';
import {PencegahanComponent} from './pencegahan/pencegahan.component';
import {PengobatanComponent} from './pengobatan/pengobatan.component';

const routes: Routes = [
  {
    path:'serviks',
    component:ServiksComponent
  },
  {
    path:'kanker-serviks',
    component:KankerServiksComponent
  },
  {
    path:'faktor-resiko',
    component:FaktorResikoComponent
  },
  {
    path:'gejala',
    component:GejalaComponent
  },
  {
    path:'pencegahan',
    component:PencegahanComponent
  },
  {
    path:'pengobatan',
    component:PengobatanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

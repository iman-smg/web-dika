import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiksComponent } from './serviks/serviks.component';
import { KankerServiksComponent } from './kanker-serviks/kanker-serviks.component';
import { FaktorResikoComponent } from './faktor-resiko/faktor-resiko.component';
import { GejalaComponent } from './gejala/gejala.component';
import { PengobatanComponent } from './pengobatan/pengobatan.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { PencegahanComponent } from './pencegahan/pencegahan.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiksComponent,
    KankerServiksComponent,
    FaktorResikoComponent,
    GejalaComponent,
    PengobatanComponent,
    MainmenuComponent,
    PencegahanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

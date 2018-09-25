import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { ProjectComponent } from './project/project.component';
import { MenuComponent } from './menu/menu.component';
import { FirstNameComponent } from './first-name/first-name.component';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { ContacComponent } from './contac/contac.component';

const appRoutes: Routes = [
  {
    path:'',
    component: FirstScreenComponent 
   },
   {
    path:'perfil',
    component: PerfilComponent  
  },
  {
    path:'project',
    component: ProjectComponent 
  },
  {
    path:'contac',
    component: ContacComponent  
  },
  {
    path:'home',
    component: FirstScreenComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    FirstScreenComponent,
    ProjectComponent,
    MenuComponent,
    FirstNameComponent,
    PerfilComponent,
    ContacComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

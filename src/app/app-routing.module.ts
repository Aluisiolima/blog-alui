import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import {ComponeteComponent} from '../../src/app/page/componete/componete.component'

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path:'content/:id',
    component:ComponeteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

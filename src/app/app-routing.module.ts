import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {C1Component} from './component/c1/c1.component';


const routes: Routes = [
  { path: 'c1', component: C1Component },
  // { path: 'c2', component: C2Component },
  { path: '',
    redirectTo: '/c1', // auto redirect to /c1
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

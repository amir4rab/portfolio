import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path:'en',
    loadChildren: ()=> import('./languages-modules/en/en.module').then(m=> m.EnModule)
  },
  { 
    path:'de',
    loadChildren: ()=> import('./languages-modules/de/de.module').then(m=> m.DeModule)
  },
  { 
    path:'fa',
    loadChildren: ()=> import('./languages-modules/en/en.module').then(m=> m.EnModule)
  },
  { 
    path:'**',
    redirectTo: 'en'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

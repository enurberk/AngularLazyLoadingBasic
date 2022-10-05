import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule),
  },
  { 
    path: 'about',
    loadChildren: () => import('./pages/about/about.module')
      .then(m => m.AboutModule),
  },
  { 
    path: 'billet',
    loadChildren: () => import('./pages/billet/billet.module')
      .then(m => m.BilletModule),
  },
  { 
    path: 'account',
    loadChildren: () => import('./pages/account/account.module')
      .then(m => m.AccountModule),
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

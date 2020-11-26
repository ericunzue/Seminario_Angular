  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { DonMaltusAboutComponent } from './don-maltus-about/don-maltus-about.component';
  import { DonMaltusBeersComponent } from './don-maltus-beers/don-maltus-beers.component';

  const routes: Routes = [
    {
      path: '',
      redirectTo: 'beers', 
      pathMatch: 'full',
    },
    {
      path:'beers',
      component: DonMaltusBeersComponent,
    },
    {
      path: 'about',
      component: DonMaltusAboutComponent,

    },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

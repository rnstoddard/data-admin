import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PgNotFoundComponent } from '../components/pg-not-found/pg-not-found.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'sr', loadChildren: 'app/modules/sr-database/sr-database.module#SrDatabaseModule'},
  { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'},
  { path: '**', component: PgNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: 'marketplace', component : MarketplaceComponent },
  { path: 'blog', component : BlogComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

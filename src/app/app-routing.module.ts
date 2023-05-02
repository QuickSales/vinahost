
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { FullContentRoutes } from './shared/components/routes/full.routes';
import { SwitcherLayoutComponent } from './shared/layouts/switcher-layout/switcher-layout.component';



const routes: Routes = [
  // { path:'', redirectTo:'login',pathMatch:'full'},
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: FullContentRoutes
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

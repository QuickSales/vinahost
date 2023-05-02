import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDomainExtensionsComponent } from './new-domain-extensions/new-domain-extensions.component';
import { RegisterADomainComponent } from './register-a-domain/register-a-domain.component';


const routes: Routes = [
  {path:"domains/new-domain-extensions",component:NewDomainExtensionsComponent},

  {path:"domains/register-a-domain",component:RegisterADomainComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule { }

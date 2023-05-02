import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainsRoutingModule } from './domains-routing.module';
import { RegisterADomainComponent } from './register-a-domain/register-a-domain.component';
import { NewDomainExtensionsComponent } from './new-domain-extensions/new-domain-extensions.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    RegisterADomainComponent,
    NewDomainExtensionsComponent,
  
  ],
  imports: [
    CommonModule,
    DomainsRoutingModule,
    NgbModule,
    NgSelectModule
  ]
})
export class DomainsModule { }

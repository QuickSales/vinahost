import { Routes } from '@angular/router';
export const FullContentRoutes: Routes  = [
    { path:'',
        loadChildren: () => import('src/app/components/home/home.module').then(m => m.HomeModule)
    },

    { path:'',
    loadChildren: () => import('src/app/components/domains/domains.module').then(m => m.DomainsModule)
   },

];

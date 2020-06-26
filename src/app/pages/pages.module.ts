import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProgressComponent } from '.././pages/progress/progress.component';
import { Graficas1Component } from '.././pages/graficas1/graficas1.component';


// rutas
import { PAGES_ROUTES } from './pages.routes';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})
export class PageModule{} ;
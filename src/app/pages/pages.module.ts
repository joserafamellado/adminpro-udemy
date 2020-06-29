import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProgressComponent } from '.././pages/progress/progress.component';
import { Graficas1Component } from '.././pages/graficas1/graficas1.component';


// rutas
import { PAGES_ROUTES } from './pages.routes';

// incrementador
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// grafico dona
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PageModule{} ;
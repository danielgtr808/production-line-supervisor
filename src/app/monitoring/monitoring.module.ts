import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MonitoringPageComponent } from './monitoring-page/monitoring-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const monitoringRoutes: Routes = [
    {
        component: MonitoringPageComponent,
        path: ''
    }
];

@NgModule({
    declarations: [
        MonitoringPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(monitoringRoutes),
        SharedModule
    ]
})
export class MonitoringModule { }

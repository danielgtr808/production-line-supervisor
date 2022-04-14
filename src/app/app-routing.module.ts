import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'monitoring'
    },
    {
        loadChildren: () => import("./drawing/drawing.module").then(m => m.DrawingModule),
        path: 'drawing'
    },
    {
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
        path: 'login'
    },
    {
        loadChildren: () => import("./monitoring/monitoring.module").then(m => m.MonitoringModule),
        path: 'monitoring'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

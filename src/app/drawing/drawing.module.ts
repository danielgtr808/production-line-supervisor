import { CommonModule } from '@angular/common';
import { DrawingPageComponent } from './pages/drawing-page/drawing-page.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ResponsiveFieldDirective } from './directives/responsive-field.directive';
import { RouterModule, Routes } from '@angular/router';
import { SegmentsTableComponent } from './components/segments-table/segments-table.component';
import { SegmentFieldComponent } from './components/segment-field/segment-field.component';
import { SharedModule } from '../shared/shared.module';
import { ArcSegmentRowComponent } from './components/arc-segment-row/arc-segment-row.component';
import { LineSegmentRowComponent } from './components/line-segment-row/line-segment-row.component';
import { SegmentsSideMenuComponent } from './components/segments-side-menu/segments-side-menu.component';

const drawingRoutes: Routes = [
    {
        component: DrawingPageComponent,
        path: ''
    }
]

@NgModule({
    declarations: [
        DrawingPageComponent,
        SegmentsTableComponent,
        SegmentFieldComponent,
        ResponsiveFieldDirective,
        ArcSegmentRowComponent,
        LineSegmentRowComponent,
        SegmentsSideMenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(drawingRoutes),
        SharedModule
    ]
})
export class DrawingModule { }

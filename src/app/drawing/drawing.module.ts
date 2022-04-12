import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SegmentFieldComponent } from './segment-field/segment-field.component';
import { SegmentsSideMenuComponent } from './segments-side-menu/segments-side-menu.component';
import { LineRowComponent } from './line-row/line-row.component';
import { ArcRowComponent } from './arc-row/arc-row.component';
import { SegmentSelectComponent } from './segment-select/segment-select.component';
import { SweepArcSelectComponent } from './sweep-arc-select/sweep-arc-select.component';

@NgModule({
    declarations: [
        SegmentFieldComponent,
        SegmentsSideMenuComponent,
        LineRowComponent,
        ArcRowComponent,
        SegmentSelectComponent,
        SweepArcSelectComponent
    ],
    exports: [
        SegmentsSideMenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DrawingModule { }

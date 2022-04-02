import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SegmentFieldComponent } from './segment-field/segment-field.component';
import { SegmentsSideMenuComponent } from './segments-side-menu/segments-side-menu.component';
import { LineRowComponent } from './line-row/line-row.component';

@NgModule({
    declarations: [
        SegmentFieldComponent,
        SegmentsSideMenuComponent,
        LineRowComponent
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

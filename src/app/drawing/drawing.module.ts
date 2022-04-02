import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SegmentsSideMenuComponent } from './segments-side-menu/segments-side-menu.component';

@NgModule({
    declarations: [
        SegmentsSideMenuComponent
    ],
    exports: [
        SegmentsSideMenuComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class DrawingModule { }

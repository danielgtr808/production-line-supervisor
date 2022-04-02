import { CommonModule } from '@angular/common';
import { CircuitComponent } from './circuit/circuit.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        CircuitComponent
    ],
    exports: [
        CircuitComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }

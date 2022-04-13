import { CommonModule } from '@angular/common';
import { CircuitComponent } from './circuit/circuit.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        CircuitComponent,
        ErrorMessageComponent
    ],
    exports: [
        CircuitComponent,
        ErrorMessageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }

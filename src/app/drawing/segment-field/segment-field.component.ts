import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseFormField } from 'src/app/helpers/base-form-field.model';

@Component({
    selector: 'app-segment-field',
    templateUrl: './segment-field.component.html',
    styleUrls: ['./segment-field.component.css'],
    providers: [     
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => SegmentFieldComponent),
            multi: true
        }   
    ]  
})
export class SegmentFieldComponent extends BaseFormField { }

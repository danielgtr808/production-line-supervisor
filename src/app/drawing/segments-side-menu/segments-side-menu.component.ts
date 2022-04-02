import { CircuitService } from 'src/app/shared/circuit/circuit.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Segment from '../models/segment.type';

@Component({
    selector: 'app-segments-side-menu',
    templateUrl: './segments-side-menu.component.html',
    styleUrls: ['./segments-side-menu.component.css']
})
export class SegmentsSideMenuComponent {

    public form: FormGroup;
    public segments: Segment[] = [];

    constructor(circuitService: CircuitService, private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            segments: this.formBuilder.array([])
        });

        this.segments = circuitService.segments;
    }

    click() {
        this.segments.push({
            heigth: 5,
            length: 5,
            type: "Line"
        })
    }

}

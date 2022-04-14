import { Component } from '@angular/core';
import { CircuitService } from 'src/app/shared/circuit/circuit.service';
import Segment from '../../models/segment.type';

@Component({
    selector: 'app-segments-side-menu',
    templateUrl: './segments-side-menu.component.html',
    styleUrls: ['./segments-side-menu.component.css']
})
export class SegmentsSideMenuComponent {

    segments: Segment[]

    constructor(private circuitService: CircuitService) {
        this.segments = this.circuitService.segments;
    }

    createSegment(): void {
        this.circuitService.createSegment("Arc");
    }

}

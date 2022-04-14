import { CircuitService } from 'src/app/shared/circuit/circuit.service';
import { Component, Input } from '@angular/core';
import Segment from '../../models/segment.type';
import SegmentType from '../../models/segment-type.type';

@Component({
    template: ''
})
export class BaseSegmentRowComponent<T extends Segment, P extends string> {

    @Input() segment: T | undefined;

    constructor(private circuitService: CircuitService) { }

    onInput(value: number, field: P): void {
        if(!this.segment) return;

        if(Object.keys(this.segment).includes(field)) {
            // @ts-ignore
            this.segment[field] = value;
        }
    }

    onChangeSegmentType(newType: SegmentType): void {
        if(!this.segment) return
        this.circuitService.changeSegmentType(this.segment, newType);
    }

}

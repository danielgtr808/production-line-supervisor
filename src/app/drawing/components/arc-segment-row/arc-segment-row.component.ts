import { Component } from '@angular/core';
import ChangeSegmentTypeConfig from '../../configs/change-segment-type.config';
import ArcSegment from '../../models/arc-segment.type';
import { BaseSegmentRowComponent } from '../base-segment-row/base-segment-row.component';
import { SelectConfig } from '../segment-field/field-config.model';

@Component({
    selector: 'app-arc-segment-row',
    templateUrl: './arc-segment-row.component.html',
    styleUrls: ['./arc-segment-row.component.css', './../segments-table/segments-table.component.css']
})
export class ArcSegmentRowComponent extends BaseSegmentRowComponent<ArcSegment, keyof ArcSegment> {

    sweepConfiguration: SelectConfig = {
        data: [
            {
                defaultValue: true,
                display: "Não",
                value: 0
            },
            {
                display: "Sim",
                value: 1
            }
        ],
        type: "select"
    }
    
}

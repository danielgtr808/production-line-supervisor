import { BaseSegmentRowComponent } from '../base-segment-row/base-segment-row.component';
import { Component } from '@angular/core';
import LineSegment from '../../models/line-segment.type';

@Component({
    selector: 'app-line-segment-row',
    templateUrl: './line-segment-row.component.html',
    styleUrls: ['./line-segment-row.component.css', './../segments-table/segments-table.component.css']
})
export class LineSegmentRowComponent extends BaseSegmentRowComponent<LineSegment, keyof LineSegment> {

}

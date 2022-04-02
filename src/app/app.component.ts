import { Component } from '@angular/core';
import Segment from './drawing/models/segment.type';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Production line supervisor";

    public segments: Segment[] = [
        {
            heigth: 10,
            length: 100,
            type: "Line"
        },
        {
            heigth: 20,
            length: 20,
            type: "Line"
        }
    ]

}

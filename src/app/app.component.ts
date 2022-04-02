import { CircuitService } from './shared/circuit/circuit.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = "Production line supervisor";

    constructor(public circuitService: CircuitService) { }

}

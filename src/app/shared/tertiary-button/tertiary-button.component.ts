import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tertiary-button',
    templateUrl: './tertiary-button.component.html',
    styleUrls: ['./tertiary-button.component.css']
})
export class TertiaryButtonComponent {

    @Input() label: string = "";
    @Input() leadingIcon: string = "";

}

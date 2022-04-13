import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-bordered-input',
    templateUrl: './bordered-input.component.html',
    styleUrls: ['./bordered-input.component.css']
})
export class BorderedInputComponent implements OnInit {

    @ViewChild('input') inputElement: ElementRef | undefined;

    constructor() { }

    ngOnInit(): void {
    }

    focusOnInput(): void {
        if(!this.inputElement) return;
        (this.inputElement.nativeElement as HTMLElement).focus();
    }

}

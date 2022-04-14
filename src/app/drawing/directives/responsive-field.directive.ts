import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appResponsiveField]'
})
export class ResponsiveFieldDirective {

    private inputElement: HTMLInputElement;

    constructor(elementRef: ElementRef) {
        this.inputElement = elementRef.nativeElement;
        this.onInput();
    }

    @HostListener("input")
    onInput() {
        this.inputElement.style.width = `${this.inputElement.value.length + 3}ch`
    }

}

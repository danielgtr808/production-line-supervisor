import { BaseFormField } from 'src/app/helpers/base-form-field.model';
import { Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-bordered-input',
  templateUrl: './bordered-input.component.html',
  styleUrls: ['./bordered-input.component.css'],
  providers: [{
        provide: NG_VALUE_ACCESSOR, 
        useExisting: forwardRef(() => BorderedInputComponent),
        multi: true     
    }]
})
export class BorderedInputComponent extends BaseFormField implements OnInit {

    @ViewChild('input') inputElement: ElementRef | undefined;
    private _isPassword: boolean = false;
    private _onFocus: boolean = false;

    get isPassword(): boolean {
        return this._isPassword;
    }

    get onFocus(): boolean {
        return this._onFocus;
    }

    ngOnInit(): void {
        this._isPassword = this.type === "password";
    }

    focusOnInput(): void {
        if(!this.inputElement) return;
        (this.inputElement.nativeElement as HTMLElement).focus();
    }

    onInputBlur(): void {
        this._onFocus = false;
        this.onBaseTouchedFn();
    }

    onInputFocus(): void {
        this._onFocus = true;
    }

    togglePasswordView(): void {
        this.type = this.type === "password" ? "text" : "password";
    }

}

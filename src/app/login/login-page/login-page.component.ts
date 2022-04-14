import { Component, ViewChild } from '@angular/core';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import LoginPageValidator from './login-page.validator';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

    @ViewChild(ErrorMessageComponent) errorMessageComponent: ErrorMessageComponent | undefined;

    form: FormGroup;

    constructor(formBuilder: FormBuilder, validator: LoginPageValidator) {
        this.form = formBuilder.group({
            email: new FormControl('', validator.email),
            password: new FormControl('', validator.password)
        })
    }

    async login() {
        if(this.form.invalid) {
            this.form.markAllAsTouched();
            return
        }        
    }

}

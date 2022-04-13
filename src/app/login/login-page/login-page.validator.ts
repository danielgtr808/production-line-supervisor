import { AbstractControl } from "@angular/forms";
import { Injectable } from "@angular/core";
import ValidatorReturn from "src/app/helpers/validator-return.type";

@Injectable({
    providedIn: 'root'
})
class LoginPageValidator {

    email(control: AbstractControl): ValidatorReturn<"email"> {
        const value: string = (control.value ?? "").trim();

        console.log("email")

        if(value.length === 0) {
            return { 'email': "É necessário fornecer um email." };
        }

        if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))) {
            return { 'email': "Formato de e-mail inválido." };
        }

        return null;
    }

    password(control: AbstractControl): ValidatorReturn<"password"> {
        const value: string = (control.value ?? "").trim();

        if(value.length === 0) {
            return { 'password': "É necessário fornecer uma senha." }
        }

        return null;
    }

}

export default LoginPageValidator
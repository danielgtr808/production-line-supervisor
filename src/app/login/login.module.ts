import { BorderedInputComponent } from './bordered-input/bordered-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const loginRoutes: Routes = [
    {
        component: LoginPageComponent,
        path: ''
    }
]

@NgModule({
    declarations: [
        LoginPageComponent,
        BorderedInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(loginRoutes),
        SharedModule
    ]
})
export class LoginModule { }

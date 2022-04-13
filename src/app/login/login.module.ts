import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderedInputComponent } from './bordered-input/bordered-input.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';

const loginRoutes: Routes = [
    {
        path: '',
        component: BorderedInputComponent
    }
]

@NgModule({
    declarations: [
        BorderedInputComponent,
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(loginRoutes)
    ]
})
export class LoginModule { }

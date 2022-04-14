import { CircuitComponent } from './circuit/circuit.component';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuLinkComponent } from './side-menu/side-menu-link/side-menu-link.component';
import { TertiaryButtonComponent } from './tertiary-button/tertiary-button.component';
import { UserDataComponent } from './side-menu/user-data/user-data.component';


@NgModule({
    declarations: [
        CircuitComponent,
        ErrorMessageComponent,
        PrimaryButtonComponent,
        SideMenuComponent,
        TertiaryButtonComponent,
        SideMenuLinkComponent,
        UserDataComponent
    ],
    exports: [
        CircuitComponent,
        ErrorMessageComponent,
        PrimaryButtonComponent,
        SideMenuComponent,
        TertiaryButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }

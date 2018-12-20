import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { CercaComponent } from './cerca/cerca.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
    ],
    declarations: [
        AppComponent,
        CercaComponent,
        ImpostazioniComponent,
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

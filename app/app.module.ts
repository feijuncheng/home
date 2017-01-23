/**
 * Created by Knight on 2017/1/23.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './component/app.component';
import {NavbarComponent} from "./component/navbar.component";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        //让angular认识component对应的标签
        AppComponent,
        NavbarComponent
    ],
    bootstrap: [AppComponent],
    providers: []
})


export class AppModule { }
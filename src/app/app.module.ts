import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Material
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomeComponent } from './components/home/home.component';
import { InViewportDirective } from './directives/in-viewport.directive';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        InViewportDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTooltipModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

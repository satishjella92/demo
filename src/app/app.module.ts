import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PolicyMappingComponent } from './policy-mapping/policy-mapping.component';
import { ROUTING } from "./app.routes";
import { ContextMenuModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    PolicyMappingComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    ContextMenuModule,
    ButtonModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

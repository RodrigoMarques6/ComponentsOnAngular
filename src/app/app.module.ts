import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { FatherComponentComponent } from './components/father-component/father-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    FatherComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

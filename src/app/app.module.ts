import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElectronCookieTestComponent } from './components/electron-cookie-test/electron-cookie-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectronCookieTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

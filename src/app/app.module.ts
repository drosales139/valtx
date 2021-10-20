import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout/flex';
import { GridModule } from '@angular/flex-layout/grid';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AppProvidersModule } from './providers/app-providers.module';
import { SnackbarProviderModule } from './providers/snackbar-provider/snackbar-provider.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SnackbarProviderModule,
    AppProvidersModule,
    HttpClientModule,
    FlexModule,
    GridModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

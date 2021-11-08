import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MaterialModule } from './module/material.module';
import { AddMarkerComponent } from './components/map/add-marker/add-marker.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MapComponent,
		HomeComponent,
		AddMarkerComponent,
	],
	imports: [
		BrowserModule,
		MaterialModule,
		ReactiveFormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LeafletModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { icon, LatLng, latLng, Map, marker, tileLayer } from 'leaflet';
import { Complaint } from 'src/app/utils/interfaces';
import { AddMarkerComponent } from './add-marker/add-marker.component';
@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
	map?: Map;
	coords: any;
	options: any;
	layers: any;

	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {
		this.coords = { lat: -8.0641931, lng: -34.8781517 };

		this.options = {
			layers: [
				tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					detectRetina: true,
					maxNativeZoom: 19,
					maxZoom: 22,
				}),
			],
			zoom: 16,
			center: latLng(this.coords.lat, this.coords.lng),
			attributionControl: false,
			maxZoom: 22,
			minZoom: 15,
		};

		this.layers = [];
	}

	onMapReady(map: Map) {
		this.map = map;
		this.getPosition();
	}

	private getPosition(): void {
		navigator.geolocation.getCurrentPosition(
			(pos) => {
				this.coords.lat = pos.coords.latitude;
				this.coords.lng = pos.coords.longitude;

				if (this.map) {
					this.map.setView([this.coords.lat, this.coords.lng], 17);
					this.createMarker(this.coords, {
						iconUrl: 'assets/current.svg',
					});
				} else {
					this.getPosition();
				}
			},
			() => alert('Permita que o aplicativo acesse sua localização'),
			{ enableHighAccuracy: true }
		);
	}

	mapClick(event: any) {
		const dialogRef = this.dialog.open(AddMarkerComponent, {
			width: '360px',
			data: { latLng: event.latlng },
		});

		dialogRef.afterClosed().subscribe((result: Complaint) => {
			if (result) {
				this.createMarker(event.latlng, {}, result);
			}
		});
	}

	private createMarker(latLng: LatLng, options?: any, complaint?: Complaint) {
		const pin = marker(latLng, {
			icon: icon({
				iconSize: [50, 50],
				iconUrl: 'assets/pin.png',
				...options,
			}),
		});

		if (complaint) {
			pin.bindPopup(`
				<div class="complaint">
					<strong>Tipo</strong>
					<p>${complaint.type}</p>
					<strong>Descrição</strong>
					<p>${complaint.description}</p>
				</div>
			`);
		}

		this.layers.push(pin);
	}
}

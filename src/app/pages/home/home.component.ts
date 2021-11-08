import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
	constructor(private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this._snackBar
			.open('Bem-vindo ao Alerta Aí!', '👋', {
				horizontalPosition: 'right',
				verticalPosition: 'bottom',
				duration: 3000,
			})
			.afterDismissed()
			.subscribe(() => {
				this._snackBar.open('Clique no mapa para realizar sua denúncia', 'Ok', {
					horizontalPosition: 'right',
					verticalPosition: 'bottom',
					duration: 3000,
				});
			});
	}
}

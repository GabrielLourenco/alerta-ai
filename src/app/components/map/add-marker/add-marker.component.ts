import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComplaintType } from 'src/app/utils/enums';

@Component({
	selector: 'app-add-marker',
	templateUrl: './add-marker.component.html',
	styleUrls: ['./add-marker.component.scss'],
})
export class AddMarkerComponent implements OnInit {
	complaints?: any[];
	form: FormGroup;
	loading?: boolean;

	constructor(
		public dialogRef: MatDialogRef<AddMarkerComponent>,
		private _snackBar: MatSnackBar,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.form = new FormGroup({
			type: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
		});
	}

	ngOnInit(): void {
		this.complaints = Object.entries(ComplaintType).map(([type, text]) => ({
			type,
			text,
		}));
	}

	close(): void {
		this.dialogRef.close();
	}

	submit() {
		// salvar no firebase
		// this.data.latLng tem as coordenadas
		this.loading = true;

		// só para dar o efeito de carregamento
		setTimeout(() => {
			this.loading = false;
			this.dialogRef.close(this.form.value);

			this._snackBar.open(
				'Sua denúncia foi criada com sucesso! Clique no marcador para visualizar',
				undefined,
				{
					horizontalPosition: 'right',
					verticalPosition: 'bottom',
					duration: 3000,
				}
			);
		}, 2000);
	}
}

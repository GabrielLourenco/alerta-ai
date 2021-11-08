import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-add-marker',
	templateUrl: './add-marker.component.html',
	styleUrls: ['./add-marker.component.scss'],
})
export class AddMarkerComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<AddMarkerComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {}

	close(): void {
		this.dialogRef.close();
	}
}

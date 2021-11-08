import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	exports: [
		MatButtonModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule,
		MatProgressSpinnerModule,
	],
})
export class MaterialModule {}

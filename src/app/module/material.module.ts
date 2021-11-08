import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
	exports: [
		MatButtonModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatDialogModule,
		MatInputModule,
	],
})
export class MaterialModule {}

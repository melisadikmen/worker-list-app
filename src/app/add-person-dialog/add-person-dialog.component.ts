import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainModel } from '../userDetails';
@Component({
  selector: 'app-add-person-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './add-person-dialog.component.html',
  styleUrl: './add-person-dialog.component.scss'
})
export class AddPersonDialogComponent {
  person: MainModel = {};

  onNoClick() {}
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MainModel } from '../userDetails';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatDialogModule, MatDialogContent,MatDialogTitle],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: MainModel) {
    console.log(dialogData);
    
  }
}

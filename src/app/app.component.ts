import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { MatTableModule } from '@angular/material/table';
import { userData } from './userData.const';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MainModel } from './userDetails';
import { DetailsComponent } from './details/details.component';
import { AddPersonDialogComponent } from './add-person-dialog/add-person-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, FontAwesomeModule, MatTableModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  // degisken1: string = "string";
  // degisken2: number = 5;
  // degisken3: boolean = true || false;
  // degisken4: string[] = ["melisa", "dikmen", "ankara"]
  // degisken5: number[] = [1, 2, 3, 4, 5];
  // degisken6: MainModel = { name: "Melisa", surname: "Alatas", "country": "tt", age: 18 };
  // degisken7: MainModel[] = [
  //   { name: "Melisa", surname: "dikmen", "country": "tt", age: 18 },
  //   { name: "Melisa2", surname: "dikmen2", "country": "tt2", age: 128 },
  // ]
  //Interface ile değişken tanımlarken mutlaka obje('{}') şeklinde yazmamız gerekir. Çünkü interfaceler
  //birer objedir. MainModel[] şeklinde yazıldığında da önce '[]' açılır sonra obje tanımlaması yapılır!

  title = 'talha-odev';
  faUserPlus = faUserPlus;
  displayedColumns: string[] = ['name', 'surname', 'age', 'country', 'actions'];
  dataSource = userData;
  constructor(public dialog: MatDialog, private _cdr: ChangeDetectorRef) { }

  openDialog(element: MainModel) {
    console.log(element);
    this.dialog.open(DetailsComponent, {
      data: element,
    });
  }

  addPersonelDialog() {
    this.dialog.open(AddPersonDialogComponent, {}).afterClosed().subscribe(value => {
      //Afteclosed dialog kapandıktan sonra yapılan işlemlerdir. Subs olunur. İstediğin değişken ismi verilir.
      //Dialog kapandıktan sonra oradan gönderdiğimiz değişkeni burada 'value' ile yakaladık ve arrayimize pushladık
      this.dataSource.push(value);
      this.dataSource = [...this.dataSource] // Hafızadaki değerini güncellemek için bu şekilde yaptık
      this._cdr.markForCheck(); //Angularda bazen değişiklikler ekrana yansımıyor. Onun için bu kütüph kullanılmalı
    });
  }
}

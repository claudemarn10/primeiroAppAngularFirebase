import { Component } from '@angular/core';
import {map} from 'rxjs/operators';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ModalProductComponent } from './modal-product/modal-product.component';
import {AngularFireDatabase} from '@angular/fire/database';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  displayedColumns: string[] = ['name', 'value' , 'functions'];
  dataSource: any;
  dbName = 'products';

  constructor(public dialog: MatDialog,
              private db: AngularFireDatabase) {

                this.dataSource = this.db.list (this.dbName)
                .snapshotChanges()
                .pipe(
                  map(items => {
                    return items.map(item => {
                      return Object.assign({ key: item.payload.key}, item.payload.val());
                    });

                  })
                );
              }




  // tslint:disable-next-line: typedef
  insert( ){
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '250px',
      data: { type: 'insert' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
          this.db.list (this.dbName).push(result);
      }
    });
  }

  // tslint:disable-next-line: typedef
  delete(key){
    this.db.list (this.dbName).remove(key);
  }

   // tslint:disable-next-line: typedef
   edit( data){
    const dialogRef = this.dialog.open(ModalProductComponent, {
      width: '250px',
      data: {...data, type: 'update'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
          this.db.list (this.dbName).update(data.key, result);
      }
    });
  }

}

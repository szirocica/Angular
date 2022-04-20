import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
/*
import { rejects } from 'assert';
import { error, time } from 'console';
import { resolve } from 'dns';
*/
import { Tile } from './tile.model';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  [x: string]: any;

  constructor(private angularFirestore: AngularFirestore) { }

  getTileDoc(id){ //id: string eredetileg
    return this.angularFirestore
    .collection('tile-collection')
    .doc(id)
    .valueChanges()
  }

  getTileList(){
    return this.angularFirestore
    .collection('tile-collection')
    .snapshotChanges();
  }

  createTile(tile: Tile){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
      .collection("tile-collection")
      .add(tile)
      .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteTile(tile){ //eredetile sima (tile)
    return this.angularFirestore
    .collection("tile-collection")
    .doc(tile.id)
    .delete();
  }

  updateTile(tile: Tile, id){ //csak id
    return this.angularFirestore
    .collection("tile-collection")
    .doc(id)
    .update({
      name: tile.name,
      email: tile.email,
      student_course: tile.student_course,
      fees: tile.fees
    });
  }
}

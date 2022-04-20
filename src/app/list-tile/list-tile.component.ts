import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.model';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.css']
})
export class ListTileComponent implements OnInit {
  Tile: Tile[];

  constructor(private tileService: TileService) { }

  ngOnInit(){
    this.tileService.getTileList().subscribe(res => {
      this.Tile = res.map( e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Tile;
      })
    });
  }

  removeTile (Tile: Tile){ //Tile
    if(confirm("Are you sure to delete" + Tile.name)){
      this.tileService.deleteTile(Tile); //Tile
    }
  }

}

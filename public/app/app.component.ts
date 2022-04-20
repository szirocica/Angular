import { Component } from '@angular/core';

/**
 * @title Card with footer
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csempe-bolt-crud';
  longText = `Tiles are usually thin, square or rectangular
  coverings manufactured from hard-wearing material such as
  ceramic, stone, metal, baked clay, or even glass. They are
  generally fixed in place in an array to cover roofs,
   floors, walls, edges, or other objects such as tabletops.
   Alternatively, tile can sometimes refer to similar units
    made from lightweight materials such as perlite, wood,
     and mineral wool, typically used for wall and ceiling
      applications.`;
  value = 'Clear me';
  formatLabel(value: number) {
    if (value >= 1000) {
      //console.log('1000+');
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
}
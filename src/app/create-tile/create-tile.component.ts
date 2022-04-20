import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-create-tile',
  templateUrl: './create-tile.component.html',
  styleUrls: ['./create-tile.component.css']
})
export class CreateTileComponent implements OnInit {

  public tileForm: FormGroup;
  //
  value = 'Clear me';

  constructor(
    public tileService: TileService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.tileForm = this.formBuilder.group({
      name: [''],
      email: [''],
      student_course: [''],
      fees: ['']
    })
  }

  ngOnInit(): void {
  }


  onSubmit(){
    this.tileService.createTile(this.tileForm.value);
    this.router.navigate(['list-tile']);
  };

}

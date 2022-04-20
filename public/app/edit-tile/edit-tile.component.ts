import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-edit-tile',
  templateUrl: './edit-tile.component.html',
  styleUrls: ['./edit-tile.component.css']
})
export class EditTileComponent implements OnInit {
  public editForm: FormGroup;
  tileRef: any;

  constructor(
    public tileService: TileService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      email: [''],
      student_course: [''],
      fees: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.tileService.getTileDoc(id).subscribe(res => { //csak id
      this.tileRef = res;
      this.editForm = this.formBuilder.group({
        name:[this.tileRef.name],
        email:[this.tileRef.email],
        student_course:[this.tileRef.student_course],
        fees:[this.tileRef.fees]
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');

    this.tileService.updateTile(this.editForm.value, id);
    this.router.navigate(['list-tile']);
  }

}

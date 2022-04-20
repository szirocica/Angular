import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTileComponent } from './create-tile.component';

describe('CreateTileComponent', () => {
  let component: CreateTileComponent;
  let fixture: ComponentFixture<CreateTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

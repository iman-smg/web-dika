import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencegahanComponent } from './pencegahan.component';

describe('PencegahanComponent', () => {
  let component: PencegahanComponent;
  let fixture: ComponentFixture<PencegahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PencegahanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PencegahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

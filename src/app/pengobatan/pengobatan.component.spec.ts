import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengobatanComponent } from './pengobatan.component';

describe('PengobatanComponent', () => {
  let component: PengobatanComponent;
  let fixture: ComponentFixture<PengobatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengobatanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengobatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

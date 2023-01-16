import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaktorResikoComponent } from './faktor-resiko.component';

describe('FaktorResikoComponent', () => {
  let component: FaktorResikoComponent;
  let fixture: ComponentFixture<FaktorResikoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaktorResikoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaktorResikoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

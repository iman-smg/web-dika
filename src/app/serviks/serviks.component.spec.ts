import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiksComponent } from './serviks.component';

describe('ServiksComponent', () => {
  let component: ServiksComponent;
  let fixture: ComponentFixture<ServiksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

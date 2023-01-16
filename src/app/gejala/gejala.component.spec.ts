import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GejalaComponent } from './gejala.component';

describe('GejalaComponent', () => {
  let component: GejalaComponent;
  let fixture: ComponentFixture<GejalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GejalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GejalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KankerServiksComponent } from './kanker-serviks.component';

describe('KankerServiksComponent', () => {
  let component: KankerServiksComponent;
  let fixture: ComponentFixture<KankerServiksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KankerServiksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KankerServiksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

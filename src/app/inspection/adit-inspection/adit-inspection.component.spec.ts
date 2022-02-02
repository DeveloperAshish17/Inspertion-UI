import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditInspectionComponent } from './adit-inspection.component';

describe('AditInspectionComponent', () => {
  let component: AditInspectionComponent;
  let fixture: ComponentFixture<AditInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AditInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

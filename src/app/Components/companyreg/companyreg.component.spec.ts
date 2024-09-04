import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyregComponent } from './companyreg.component';

describe('CompanyregComponent', () => {
  let component: CompanyregComponent;
  let fixture: ComponentFixture<CompanyregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyregComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

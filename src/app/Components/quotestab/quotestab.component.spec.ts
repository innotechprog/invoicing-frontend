import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotestabComponent } from './quotestab.component';

describe('QuotestabComponent', () => {
  let component: QuotestabComponent;
  let fixture: ComponentFixture<QuotestabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuotestabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuotestabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

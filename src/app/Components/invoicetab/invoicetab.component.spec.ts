import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicetabComponent } from './invoicetab.component';

describe('InvoicetabComponent', () => {
  let component: InvoicetabComponent;
  let fixture: ComponentFixture<InvoicetabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicetabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

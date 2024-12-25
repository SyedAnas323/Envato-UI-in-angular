import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCardComponent } from './sec-card.component';

describe('SecCardComponent', () => {
  let component: SecCardComponent;
  let fixture: ComponentFixture<SecCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

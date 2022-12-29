import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatvedelmiComponent } from './adatvedelmi.component';

describe('AdatvedelmiComponent', () => {
  let component: AdatvedelmiComponent;
  let fixture: ComponentFixture<AdatvedelmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdatvedelmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdatvedelmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnComponent } from './en.component';

describe('EnComponent', () => {
  let component: EnComponent;
  let fixture: ComponentFixture<EnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

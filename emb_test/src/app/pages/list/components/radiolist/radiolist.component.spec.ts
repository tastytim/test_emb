import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiolistComponent } from './radiolist.component';

describe('RadiolistComponent', () => {
  let component: RadiolistComponent;
  let fixture: ComponentFixture<RadiolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

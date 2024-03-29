import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBlockComponent } from './first-block.component';

describe('FirstBlockComponent', () => {
  let component: FirstBlockComponent;
  let fixture: ComponentFixture<FirstBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

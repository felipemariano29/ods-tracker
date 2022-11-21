import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipswitchComponent } from './flipswitch.component';

describe('FlipswitchComponent', () => {
  let component: FlipswitchComponent;
  let fixture: ComponentFixture<FlipswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

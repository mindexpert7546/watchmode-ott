import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvlistComponent } from './mvlist.component';

describe('MvlistComponent', () => {
  let component: MvlistComponent;
  let fixture: ComponentFixture<MvlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MvlistComponent]
    });
    fixture = TestBed.createComponent(MvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

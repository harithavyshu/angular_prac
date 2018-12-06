import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFormComponent } from './animation-form.component';

describe('AnimationFormComponent', () => {
  let component: AnimationFormComponent;
  let fixture: ComponentFixture<AnimationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserReactiveComponent } from './adduser-reactive.component';

describe('AdduserReactiveComponent', () => {
  let component: AdduserReactiveComponent;
  let fixture: ComponentFixture<AdduserReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdduserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

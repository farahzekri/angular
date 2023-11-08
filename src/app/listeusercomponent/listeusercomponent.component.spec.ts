import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeusercomponentComponent } from './listeusercomponent.component';

describe('ListeusercomponentComponent', () => {
  let component: ListeusercomponentComponent;
  let fixture: ComponentFixture<ListeusercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeusercomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeusercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

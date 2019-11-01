import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAppComponent } from './top-app.component';

describe('TopAppComponent', () => {
  let component: TopAppComponent;
  let fixture: ComponentFixture<TopAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

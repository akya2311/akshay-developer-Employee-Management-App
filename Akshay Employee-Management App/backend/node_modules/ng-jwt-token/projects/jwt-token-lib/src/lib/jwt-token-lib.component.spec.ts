import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtTokenLibComponent } from './jwt-token-lib.component';

describe('JwtTokenLibComponent', () => {
  let component: JwtTokenLibComponent;
  let fixture: ComponentFixture<JwtTokenLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtTokenLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtTokenLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

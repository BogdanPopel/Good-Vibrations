import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPageComponent } from './sign-up-page.component';
//import {RouterTestingModule} from '@angular/router/testing';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //imports: [RouterTestingModule],
      declarations: [ SignUpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

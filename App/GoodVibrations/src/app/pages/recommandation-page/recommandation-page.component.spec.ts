import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandationPageComponent } from './recommandation-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('RecommandationPageComponent', () => {
  let component: RecommandationPageComponent;
  let fixture: ComponentFixture<RecommandationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
      declarations: [ RecommandationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

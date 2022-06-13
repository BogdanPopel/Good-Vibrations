import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandationPageComponent } from './recommandation-page.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('RecommandationPageComponent', () => {
  let component: RecommandationPageComponent;
  let fixture: ComponentFixture<RecommandationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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

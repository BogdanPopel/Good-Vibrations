import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandationPageComponent } from './recommandation-page.component';

describe('RecommandationPageComponent', () => {
  let component: RecommandationPageComponent;
  let fixture: ComponentFixture<RecommandationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

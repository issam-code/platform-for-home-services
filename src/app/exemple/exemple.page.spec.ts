import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExemplePage } from './exemple.page';

describe('ExemplePage', () => {
  let component: ExemplePage;
  let fixture: ComponentFixture<ExemplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExemplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

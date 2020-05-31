import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeprPage } from './homepr.page';

describe('HomeprPage', () => {
  let component: HomeprPage;
  let fixture: ComponentFixture<HomeprPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeprPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

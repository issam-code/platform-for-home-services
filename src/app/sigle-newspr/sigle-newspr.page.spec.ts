import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigleNewsprPage } from './sigle-newspr.page';

describe('SigleNewsprPage', () => {
  let component: SigleNewsprPage;
  let fixture: ComponentFixture<SigleNewsprPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigleNewsprPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigleNewsprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

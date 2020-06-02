import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhmPage } from './phm.page';

describe('PhmPage', () => {
  let component: PhmPage;
  let fixture: ComponentFixture<PhmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

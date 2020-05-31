import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsprPage } from './newspr.page';

describe('NewsprPage', () => {
  let component: NewsprPage;
  let fixture: ComponentFixture<NewsprPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsprPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

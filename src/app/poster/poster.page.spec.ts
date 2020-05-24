import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosterPage } from './poster.page';

describe('PosterPage', () => {
  let component: PosterPage;
  let fixture: ComponentFixture<PosterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

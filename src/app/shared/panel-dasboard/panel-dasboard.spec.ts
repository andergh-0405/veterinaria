import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDasboard } from './panel-dasboard';

describe('PanelDasboard', () => {
  let component: PanelDasboard;
  let fixture: ComponentFixture<PanelDasboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelDasboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelDasboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorLcaCdbComponent } from './comparador-lca-cdb.component';

describe('ComparadorLcaCdbComponent', () => {
  let component: ComparadorLcaCdbComponent;
  let fixture: ComponentFixture<ComparadorLcaCdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparadorLcaCdbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparadorLcaCdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

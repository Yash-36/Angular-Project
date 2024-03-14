import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudStaticComponent } from './crud-static.component';

describe('CrudStaticComponent', () => {
  let component: CrudStaticComponent;
  let fixture: ComponentFixture<CrudStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudStaticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

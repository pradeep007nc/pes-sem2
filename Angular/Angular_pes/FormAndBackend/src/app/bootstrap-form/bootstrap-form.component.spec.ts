import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapFormComponent } from './bootstrap-form.component';

describe('BootstrapFormComponent', () => {
  let component: BootstrapFormComponent;
  let fixture: ComponentFixture<BootstrapFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapFormComponent]
    });
    fixture = TestBed.createComponent(BootstrapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

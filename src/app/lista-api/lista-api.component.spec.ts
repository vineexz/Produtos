import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAPIComponent } from './lista-api.component';

describe('ListaAPIComponent', () => {
  let component: ListaAPIComponent;
  let fixture: ComponentFixture<ListaAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

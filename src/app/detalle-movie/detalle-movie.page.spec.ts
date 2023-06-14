import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleMoviePage } from './detalle-movie.page';

describe('DetalleMoviePage', () => {
  let component: DetalleMoviePage;
  let fixture: ComponentFixture<DetalleMoviePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

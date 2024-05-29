import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContatoComponent } from './criar-contato.component';

describe('CriarContatoComponent', () => {
  let component: CriarContatoComponent;
  let fixture: ComponentFixture<CriarContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarContatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVariationsComponent } from './item-variations.component';

describe('ItemVariationsComponent', () => {
  let component: ItemVariationsComponent;
  let fixture: ComponentFixture<ItemVariationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemVariationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

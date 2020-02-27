import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActorsMenuPage } from "./actors-menu.page";

describe("ActorsMenuPage", () => {
  let component: ActorsMenuPage;
  let fixture: ComponentFixture<ActorsMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsMenuPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

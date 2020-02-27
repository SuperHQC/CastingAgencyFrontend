import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActorsFormComponent } from "./actors-form.component";

describe("ActorsFormComponent", () => {
  let component: ActorsFormComponent;
  let fixture: ComponentFixture<ActorsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActorsFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

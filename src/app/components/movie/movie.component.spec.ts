/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieComponent } from './movie.component';
import { MovieService } from '../../services/movie.service';
import {ActivatedRoute } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import {FormControl,FormGroup} from '@angular/forms';

import { RouterModule } from '@angular/router';


describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  let de: DebugElement;
  let el:HTMLElement;


  beforeEach(async(() => {
       class HeroDetailServiceSpy {
          testHero = {value:42, des:'Test Hero'};

          getHero = jasmine.createSpy('getHero').and.callFake(
            () => Promise
              .resolve(true)
              .then(() => Object.assign({}, this.testHero))
          );

          saveHero = jasmine.createSpy('saveHero').and.callFake(
            (hero: any) => Promise
              .resolve(true)
              .then(() => Object.assign(this.testHero, hero))
          );
        } 







    TestBed.configureTestingModule({
      declarations: [ MovieComponent ,ActivatedRoute ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      imports: [FormsModule,
                ReactiveFormsModule,
                BrowserModule,
                FormControl,
                FormGroup,
                RouterModule],
      providers: [{provider:MovieService}]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;

    //Inject Providers


    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

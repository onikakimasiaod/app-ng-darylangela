import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RSVP } from '../../data/rsvp';
import { SectionHeroComponent } from 'src/app/sections/section-hero/section-hero.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { NavigationService } from '../../services/navigation-service.service';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    SectionHeroComponent, 
    NgIf,  
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    NgClass,
  ],
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit, OnDestroy {
  public readonly RSVP = RSVP

  public rsvpForm: FormGroup

  public isAGuest: boolean = false

  public isValid: boolean = false

  public emailExists: boolean = false

  private readonly guestsService = inject(GuestsService)

  private readonly navigationService = inject(NavigationService)

  private unsubscribe$: Subject<void> = new Subject()

  constructor(private readonly formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initForm()
    this.changesForm()
  }

  ngOnDestroy(): void {
      this.unsubscribe$.next()
      this.unsubscribe$.complete()
  }

  public submit(): void {
    if (this.isGuest()) {
      this.guestsService.postGuest(this.generateGuest()).subscribe({
        next: (() => {
          if(!!this.rsvpForm.get('attendance').value) {
            this.navigationService.navigateTo('/you-are-invited')
          } else {
            this.navigationService.navigateTo('/thank-u')
          }}),
          error: (error => {
            if (error = 409) {
              this.emailExists = true 
            }
          })
      })
    }
  }

  public isGuest(): boolean {
    return this.rsvpForm.get('guestPass').value === 'Eph4:2'
  }

  private initForm(): void {
    this.rsvpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      comments: [''],
      attendance: [null, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      guestPass: ['', [Validators.required, ]]
    })
  }

  private generateGuest(): Guest {
    const { guestPass, ...guest } = this.rsvpForm.value
    return guest
  }

  private validationForm(): boolean {
    return this.isGuest() && this.rsvpForm.valid
  }

  private changesForm(): void {
    this.rsvpForm?.valueChanges.pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe(() => {
      this.isValid = this.validationForm()
      this.emailExists = false
    })
  }
  
}

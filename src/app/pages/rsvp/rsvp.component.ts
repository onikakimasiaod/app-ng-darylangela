import { Component, OnInit, inject } from '@angular/core';
import { RSVP } from '../../data/rsvp';
import { SectionHeroComponent } from 'src/app/sections/section-hero/section-hero.component';
import { NgForOf, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { NavigationService } from '../../services/navigation-service.service';

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
  ],
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {
  public readonly RSVP = RSVP

  public rsvpForm: FormGroup

  private readonly guestsService = inject(GuestsService)

  private readonly navigationService = inject(NavigationService)

  constructor(private readonly formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initForm()
  }

  public submit(): void {
    if (this.isGuest()) {
      this.guestsService.postGuest(this.generateGuest()).subscribe(response => {
        console.log(response)
        this.navigationService.navigateTo('/you-are-invited')
      })
    }
  }

  public isGuest(): boolean {
    return this.rsvpForm.get('guestPass').value === 'Eph4:2'
  }

  private initForm(): void {
    this.rsvpForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
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
  
}

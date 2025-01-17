import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  contactForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: <number | null> null,
    email:  '',
  })

  countryCodes = [
    { code: '+44', countryName: 'United Kingdom' },
    { code: '+1', countryName: 'United States' },    
    { code: '+91', countryName: 'India' },
    { code: '+61', countryName: 'Australia' },
    { code: '+64', countryName: 'New Zealand' }
  ];

  constructor(private fb: FormBuilder) {}

  selectedCountryCode = '+44';

  saveContact(){
    console.log(this.contactForm.value);
  }

  //we will need to build an interface for the for data once we have the API setup.
  // we are just collecting the data for now
  // So we will need to build an interface for the for data once we have the API setup.
  //we will need to build the api to save the data.

}

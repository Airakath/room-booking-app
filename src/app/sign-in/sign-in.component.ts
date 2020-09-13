import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  submitted: boolean = false;
  signinFormGroup: FormGroup;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signinFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
      phone: ['', [
        Validators.required,
        Validators.pattern("[0-9]{10}")
      ]],
      birthDate: ['', Validators.required],
      nationality: ['', Validators.required],
    });
  }

  get f() {
    return this.signinFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signinFormGroup.invalid) {
      return;
    }
  }

}

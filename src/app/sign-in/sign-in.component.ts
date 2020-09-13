import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service'
import { Client } from '../models/client.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  submitted: boolean = false;
  signinFormGroup: FormGroup;
  client: Client; 
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signinFormGroup = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
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
    
    this.client = this.signinFormGroup.value;
    this.authService.signin(this.client).subscribe(res => {
      console.log(res);    
    });

  }

}

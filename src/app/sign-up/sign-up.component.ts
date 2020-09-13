import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'
import { Client } from '../models/client.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  submitted: boolean = false;
  signupFormGroup: FormGroup;
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
    this.signupFormGroup = this.formBuilder.group({
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
    return this.signupFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupFormGroup.invalid) {
      return;
    }
    this.client = this.signupFormGroup.value;
    this.authService.signup(this.client).subscribe(res => {
      console.log(res);
    }) 
  }

}

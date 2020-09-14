import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'
import { Client } from '../models/client.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  errorMessage='';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public snackbar: MatSnackBar
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

  notification() {
    this.snackbar.open('Votre compte a été créé avec succès', 'Ok', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'custum-snackbar'
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupFormGroup.invalid) {
      return;
    }
    this.client = this.signupFormGroup.value;
    this.authService.signup(this.client).subscribe(
      res => {
        this.errorMessage='';
        this.notification();
        this.router.navigate([`/connexion`]);      
      },
      err => {
        this.errorMessage = err.error.error.userMessage;
      }
    ) 
  }

}

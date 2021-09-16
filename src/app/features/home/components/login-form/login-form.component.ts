import { environment } from 'environments/environment';

import { HttpClient } from '@angular/common/http';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  formData : FormGroup = this.formBuilder.group({});
  submitted = false;
  @ViewChild('closeModal') closeModal: ElementRef
  errorMessage: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;

    if(this.formData.valid) {
      let email: string = this.formData.value.email;
      let password: string = this.formData.value.password;
      
      this.authService.login(email, password)
        .subscribe(
          () => {
            this.closeModal.nativeElement.click()
            this.router.navigateByUrl('/dashboard')
          },
          (error: any) => {
            if(error.error) {
              this.errorMessage = error.error.message;
            }
          }
        )
      
    } 
  }

  get formDataControl() {
    return this.formData.controls;
  }

}

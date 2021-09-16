import { environment } from 'environments/environment';

import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidations } from '@app/shared/utils/form-validation';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  private endpoint: string = `${environment.API}/users`;
  formData: FormGroup = this.formBuilder.group({});
  submitted: Boolean = false;
  errorMessage: string = null;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [FormValidations.equalsTo('password')]],
    })

  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;

    if(this.formData.value.password != this.formData.value.confirmPassword) {
      alert("Senhas diferem entre si");
      return;
    }

    if(!this.formData.invalid) {
      this.http.post(this.endpoint, {
        name: this.formData.value.name,
        email: this.formData.value.email,
        username: this.formData.value.username,
        password: this.formData.value.password
      })
        .subscribe(
          dados => {
            console.log(dados);
            console.log("enviou dados");

            // this.formData.reset();
          },
          (error: any) => {
            if(error.error) {
              this.errorMessage = error.error.message;
            }
          }
        );
    }
    
  }

  get formDataControl() {
    return this.formData.controls;
  }

}

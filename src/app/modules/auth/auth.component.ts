import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  constructor(private readonly _formBuilder: FormBuilder) {}

  authForm: FormGroup;

  ngOnInit(): void {
    this.authForm = this.buildForm();
  }

  authenticate() {
    const { userName } = this.authForm.value;
    console.log(userName);
  }

  private buildForm(): FormGroup {
    return this._formBuilder.group({
      userName: new FormControl('', Validators.required),
    });
  }
}

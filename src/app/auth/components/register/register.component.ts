import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Register } from 'src/app/state/actions/users.actions';
import { User } from '../../models/user.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  form!: FormGroup;
  @Output() submitted = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder,
    private store: Store,
    private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
			password: ['', Validators.required],
      email: ['', Validators.required],
      birthdate: ['', Validators.required],
      profilePicture: [''],
      role: [1]
    });
  }


    submit() {
      if (this.form.valid) {
        this.store.dispatch(new Register(this.form.value));
        this.router.navigate(['/auth/login'])
      }
    }
}

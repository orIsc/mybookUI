import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder,
    private store: Store,
    private router: Router) {}

    form = this.fb.group({
      userName: ['', Validators.required],
			password: ['', Validators.required],
    })

    submit() {
      
    }
}

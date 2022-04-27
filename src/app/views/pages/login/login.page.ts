import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceLoginService } from 'src/app/auth/auth-service-login/auth-service-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private authServiceLoginService: AuthServiceLoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@([a-z0-9._%+-]+\.)+[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    this.authServiceLoginService.setNewToken();
    this.router.navigate(['/home']);
  }
}

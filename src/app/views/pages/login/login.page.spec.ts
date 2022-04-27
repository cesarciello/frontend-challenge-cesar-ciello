import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create token when call submit', () => {
    component.submit();
    const token = localStorage.getItem('token');
    expect(token).toBeTruthy();
  });

  it('should form valid with correct values', () => {
    component.loginForm.controls.email.setValue('cesarciello15@gmail.com');
    component.loginForm.controls.password.setValue('123456');
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should form invalid with wrong values', () => {
    component.loginForm.controls.email.setValue('cesarciello15');
    component.loginForm.controls.password.setValue('123');
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should form invalid with none values', () => {
    expect(component.loginForm.valid).toBeFalse();
  });
});

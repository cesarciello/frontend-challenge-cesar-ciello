import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardLoginService } from './auth-guard-login.service';

describe('AuthGuardLoginService', () => {
  let service: AuthGuardLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(AuthGuardLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false if auth fail', () => {
    spyOn(service.authLoginService, 'isAuthenticated').and.returnValue(false);
    expect(service.canActivate()).toBeFalse();
  });

  it('should return true if auth success', () => {
    spyOn(service.authLoginService, 'isAuthenticated').and.returnValue(true);
    expect(service.canActivate()).toBeTrue();
  });
});

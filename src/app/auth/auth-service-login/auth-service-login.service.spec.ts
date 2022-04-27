import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceLoginService } from './auth-service-login.service';

describe('AuthServiceLoginService', () => {
  let service: AuthServiceLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(AuthServiceLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should isAuthenticated return false if none token', () => {
    localStorage.removeItem('token');
    expect(service.isAuthenticated()).toBeFalse();
  });

  it('should isAuthenticated return true if token exists', () => {
    localStorage.setItem('token', 'any_value');
    expect(service.isAuthenticated()).toBeTrue();
  });

  it('should isAuthenticated return true if token exists', () => {
    service.setNewToken();
    expect(localStorage.token).toBeTruthy();
  });
});

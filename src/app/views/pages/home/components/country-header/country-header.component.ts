import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrls: ['./country-header.component.scss'],
})
export class CountryHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/index/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: firebase.User;

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      });
  }

  login() {
    this.router.navigate(['/']);
  }

  logout() {
    this.auth.logout();
  }

  register() {
    this.router.navigate(['/register']);
  }

}

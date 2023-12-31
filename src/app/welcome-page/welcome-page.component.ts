import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
//import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
openUserLoginDialog() {
throw new Error('Method not implemented.');
}
  constructor(public dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {
  }
  // This is the function that will open the dialog when the signup button is clicked  
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  // This is the function that will open the dialog when the login button is clicked  
  // openUserLoginDialog(): void {
  //   this.dialog.open(UserLoginFormComponent, {
  //     width: '280px'
  //   });
  // }

  // This function opens the movies view
  openMoviesDialog(): void {
    this.router.navigate(['/movies']);
    this.dialog.open(MovieCardComponent, {
      width: '500px'
    });
  }
}

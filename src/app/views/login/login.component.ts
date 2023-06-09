import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSevice: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User("", "")

  receberDados() {
    // console.log(this.userModel)
    this.loginSevice.login(this.userModel).subscribe({
      next: (response) => {
        console.log(response)

      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading: boolean = false

  constructor(private userAuth: UserAuthService, private router: Router) { }

  ngOnInit(): void {
    // this.submitLoginForm()
  }

  public submitLoginForm() {
    this.loading = true;
    let payLoad = {
      "username": 'partner@cied.eu',
      "password": '2WsR+LcYhzvc?#y',
      "device_id": 'fgdg'
    }
    this.userAuth.login(payLoad).subscribe(response => {
      if (response.success) {
        debugger
        this.loading = false;
        this.router.navigate(['/dashboard'])
      }
      else{
        this.loading = false;
        // we can use toaster for message response then return
      }
    })
  }

}

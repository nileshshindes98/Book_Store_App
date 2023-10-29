import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, FormControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { UserService } from 'src/app/Services/User Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  mainContainerColor = '#707070'; // Default background color

  hide = true;
  login!: FormGroup;
  signup!: FormGroup;

  changeMainContainerBgCOlor: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.signup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobNo: ['', [Validators.required, Validators.pattern('[789][0-9]{9}')]]
    })
  }



  onTabChange() {
    this.changeMainContainerBgCOlor = !this.changeMainContainerBgCOlor
  }


  loginUser() {
    if (this.login.valid) {
      // console.log("Login Data :", this.login.value);

      let sendData = {
        email: this.login.value.email,
        password: this.login.value.password
      }

      console.log(sendData);


      this.userService.login(sendData).subscribe((res: any) => {
        console.log(res);
        this.snackBar.open(res.message, '', {
          duration: 2000
        });

        localStorage.setItem('token', res.result.accessToken);

        this.route.navigateByUrl('/dashboard')

      })
    } else {
      this.snackBar.open("please enter valid credential's", '', {
        duration: 2000
      });
    }

  }

  registerNewUser() {
    if (this.signup.valid) {
      let sendData = {
        fullName: this.signup.value.name,
        email: this.signup.value.email,
        password: this.signup.value.password,
        phone: this.signup.value.mobNo
      }

      console.log(sendData);

      this.userService.registerNewUser(sendData).subscribe((res: any) => {
        console.log(res);
        this.snackBar.open(res.message, '', {
          duration: 2000
        });
      })

    }
  }

}

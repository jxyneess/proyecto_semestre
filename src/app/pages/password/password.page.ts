import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PasswordPage implements OnInit {

  correo = "atorres@duocuc.cl";

  constructor(private bd: DataBaseService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  passwordchange(){
    this.router.navigate(['/ingreso'])
  }

}

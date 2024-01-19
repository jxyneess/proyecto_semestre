import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataBaseService } from 'src/app/services/data-base.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-e404',
  templateUrl: './e404.page.html',
  styleUrls: ['./e404.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class E404Page implements OnInit {

  constructor(private bd: DataBaseService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  ingreso(){
    //this.authService.inicio(this.correo, this.passwordc);
    this.router.navigate(['/ingreso'])
  }

}

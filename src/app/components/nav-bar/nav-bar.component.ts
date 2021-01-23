import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

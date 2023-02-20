import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: Router){}
  username = 'Ravindra Diggi';
  firstName = this.username.split(" ")[0];
  lastName = this.username.split(" ")[1];
  showDropdown = false;

  signOut(){

    console.log(this.route.navigate(['/login']))
  }
}
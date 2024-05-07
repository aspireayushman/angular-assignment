import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isDropdownOpen :any =  {
    bizLandPro: false,
    profile: false
  };

  smallMenu: boolean = false

  toggleSmallMenu(){
    this.smallMenu = !this.smallMenu;
  }

  toggleDropdown(menu: string) {
    this.isDropdownOpen[menu] = !this.isDropdownOpen[menu];
  }
}

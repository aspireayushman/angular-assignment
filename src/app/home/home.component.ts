import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isDropdownOpen: any = {
    bizLandPro: false,
    profile: false
  };

  smallMenu: boolean = true;

  @ViewChild('sidenav') sidenav: any;
  @ViewChild('toolbar') toolbar: any;

  constructor(private _elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.closeDropdowns();
    }
  }

  toggleSmallMenu() {
    this.smallMenu = !this.smallMenu;
  }

  toggleDropdown(menu: string) {
    this.isDropdownOpen[menu] = !this.isDropdownOpen[menu];
  }

  closeDropdowns() {
    Object.keys(this.isDropdownOpen).forEach(key => {
      this.isDropdownOpen[key] = false;
    });
  }
}

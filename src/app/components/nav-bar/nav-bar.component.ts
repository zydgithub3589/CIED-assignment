import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public activeMenu: number = 1;
  @Input() menuSelected : any = ''


  constructor() { }

  ngOnInit(): void {
    this.activeMenu = this.menuSelected
  }
 
}
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  largura: number = 8


  sideBar() {
    if (this.largura == 0) {
      this.largura = 70
    } else {
      this.largura = 0
    }
  }

  hovered: boolean = false

  onMouseOver() {
    this.hovered = true;
  }

  onMouseOut() {
    this.hovered = false;
  }


  screenWidth?: number;

 

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth >= 1024){
      this.largura = 8
    }
    else{
      this.largura = 0
    }
  }
}

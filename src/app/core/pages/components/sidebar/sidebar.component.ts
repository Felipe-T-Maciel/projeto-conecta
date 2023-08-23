import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  largura: number = this.getScreenSize()

  revela: boolean = false

  md: boolean = false

  
  sideBar() {
    if (this.largura == 0) {
      this.largura = 20
      this.revela = true
    } else {
      this.largura = 0
      this.revela = false
    }
  }

  hovered: boolean = false

  onMouseOver() {
    if(this.md){
      this.hovered = true;
      this.revela = true
    }
  }

  onMouseOut() {
    this.hovered = false;
    if(this.md){
      this.revela = false
    }
  }


  screenWidth?: number;

  ngOnInit() {
    this.getScreenSize()
    
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.revela = false

    if(this.screenWidth >= 1024){
      this.largura = 7
      this.md = true
    }
    else{
      this.largura = 0
      this.md = false
    }

    return this.largura
  }
}

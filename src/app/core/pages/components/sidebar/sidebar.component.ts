import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{  
  constructor(){}
  ngOnInit(): void {
    this.largura = 0
  }

  largura: number = 0
  menuOpen(){
    this.largura = 16
  }

  CloseSideBar(){
    this.largura = 0
  }

}

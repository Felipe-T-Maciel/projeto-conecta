import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

    @ViewChild('monitoredDiv') monitoredDiv !: ElementRef;
  
    private resizeObserver !: ResizeObserver;
  



    ngAfterViewInit() {
      const sidebarWidth = document.querySelector("#sidebar > div.pt-2.lg\\:pt-8");
      
      this.resizeObserver = new ResizeObserver(entries => {

          for (let entry of entries) {
              const sidebarWidth = entry.contentRect.width;
              const windowWidth = window.innerWidth;

              if ((sidebarWidth / windowWidth) * 100 >= 16) {
                  this.showText = true;
              } else {
                  this.showText = false;
              }
          }
      });
  
      this.resizeObserver.observe(this.sidebar.nativeElement);
  }

  

  
    ngOnDestroy() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    }
    showText: boolean = false;


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {

    if(this.widthPage >= 1024){
      this.showText = false;
      this.menu = true;
    }else{
      this.menu = false
    }
  }

  ngOnInit(): void {
    if(this.widthPage >= 1024){
      this.menu = true;
    }else{
      this.menu = false
    }
  }

  widthPage = window.innerWidth

  menu: boolean = false
  sidebar: any

  menuOpen(){
    this.menu = !this.menu;
    this.showText = !this.showText
  }

}

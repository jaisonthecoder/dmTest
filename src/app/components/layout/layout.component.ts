import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SharedServicesService } from '../../services/shared-services.service';
import { UnSub } from '../../unsub';
import { NavigationMenu } from '../../interface/navigation.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers:[SharedServicesService]
})
export class LayoutComponent  implements OnInit, OnDestroy {
  sub:Subscription[] = [];
  lang:any = 'en';

  public navigationList:NavigationMenu[] = [];
  classApplied = false;


  constructor(private viewportScroller: ViewportScroller, private sharedService: SharedServicesService, ) {}

  public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
    this.getNavigation();
  }


  getNavigation(): void{
    this.sub.push(
    this.sharedService.getMainNavigation().subscribe((data: NavigationMenu[]) => {
      this.navigationList = data;
      console.log('navigationList => ', this.navigationList)
    }));
  }




  toggleClass() {
      this.classApplied = !this.classApplied;
  }

  // Navbar Sticky
  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPosition >= 50) {
          this.isSticky = true;
      } else {
          this.isSticky = false;
      }
  }

  ngOnDestroy():void{
    this.sub.forEach(s => s.unsubscribe());
  }
}

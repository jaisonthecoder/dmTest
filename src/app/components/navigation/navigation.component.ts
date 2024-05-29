import { ViewportScroller } from '@angular/common';
import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UnSub } from '../../unsub';
import { NavigationMenu } from '../../interface/navigation.types';
import { TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';
import { faBars, faClose, faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit, OnDestroy {
  sub:Subscription[] = [];
  faBars = faBars;
  faClose= faClose;
  faSearch = faSearch;

  @Input() navigationList: NavigationMenu[] = [];
  lang: any = 'en';
  languageList = [{name:'English', code:"en", dir:'ltr'},  {name:'Arabic', code:"ar", dir:'rtl'}];
  sideBar = false;

  constructor(private transService: TranslocoService) {}

  ngOnInit(): void {

    this.transService.langChanges$.subscribe((activeLang) => {
      this.lang = activeLang;
      let selLang = this.languageList.filter((item)=>{return item.code == activeLang;});
      if (selLang.length > 0) {
        document.documentElement.setAttribute('lang', this.lang);
        document.documentElement.setAttribute('dir', selLang[0].dir);
        document.body.style.direction = selLang[0].dir;
        document.body.setAttribute('dir', selLang[0].dir);
      }
    });
  }

  toggleClass(): void {
    this.sideBar = !this.sideBar;
  }
  changeLang(lang: any): void {
    lang = lang == 'en' ? 'ar' : 'en';
    this.transService.setActiveLang(lang);
  }

  ngOnDestroy(): void {    this.sub.forEach(s => s.unsubscribe());
  }
}

import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faSearch, faMicrophone} from '@fortawesome/free-solid-svg-icons';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.scss'
})
export class HomeSliderComponent {
  faSearch = faSearch;
   faMicrophone = faMicrophone;
   lang = 'en';

slideImages = [
  {url:  "assets/img/slides/pexels-apasaric-325193.jpg",type:'image', heading:"heading will Comes here", subheading:"Sub Heading Comes here", title:"Title Comes here"},
  {url:  "assets/img/slides/pexels-apasaric-325193.jpg",type:'image', heading:"heading will Comes here", subheading:"Sub Heading Comes here", title:"Title Comes here"},
  {url:  "assets/img/slides/pexels-apasaric-325193.jpg",type:'image', heading:"heading will Comes here", subheading:"Sub Heading Comes here", title:"Title Comes here"},
]


	constructor(config: NgbCarouselConfig, private transService: TranslocoService) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}

  ngOnInt(){
    this.transService.langChanges$.subscribe((activeLang) => {
      this.lang = activeLang;
    });
  }
}

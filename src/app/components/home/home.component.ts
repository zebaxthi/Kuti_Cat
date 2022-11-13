import { Component, OnInit } from '@angular/core';
import { ApiCatService } from '../../services/api-cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cats : any;
  responsiveOptions: any;

  constructor(private apicat : ApiCatService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.cats = this.getImage();
  }

  async getImage(){
    await this.apicat.getRandomCat().subscribe((res: any) => {
      this.cats = res;
    });
  }

}

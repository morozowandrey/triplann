import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollToRoute, true);
  }

  scrollToRoute = (): void => {
    let scrollDepth = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollDepth > 0){
      this.router.navigateByUrl('/generator');
    }
  };


}
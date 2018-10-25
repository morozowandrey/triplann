import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
    // window.addEventListener('scroll', this.scrollToRoute, true);
    // window.addEventListener('scroll', () => {
    //   console.log(1);
    // }, true);
  }
  
  // @HostListener('window:scroll', ['$event'])
  
  // onScrollEvent($event){
  //   this.router.navigateByUrl('/planner/generator');
  //   // let scrollDepth = window.pageYOffset || document.documentElement.scrollTop;
  //   // if(scrollDepth > 0){
  //   // }
  // }
}
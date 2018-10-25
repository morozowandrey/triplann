import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  navValues = {
    home: 'home'
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // @HostListener('window:scroll', ['$event'])
  
  // onScrollEvent($event){
  //   console.log(event);
  //   this.router.navigateByUrl('/planner/hello');
  //   // let scrollDepth = window.pageYOffset || document.documentElement.scrollTop;
  //   // if(scrollDepth > 0){
  //   // }
  // }

}

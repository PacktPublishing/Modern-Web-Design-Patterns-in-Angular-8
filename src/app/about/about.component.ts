import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.router.url);
    // console.log(this.activatedRoute.snapshot.queryParamMap.get('name'));


    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => console.log(event));

  }

}

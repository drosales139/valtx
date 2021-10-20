import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'core',
  templateUrl: './core.layout.html',
  styleUrls: ['./core.layout.scss'],
})
export class CoreLayout implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.basicDataFacade.getUser(this.uid);
  }
}

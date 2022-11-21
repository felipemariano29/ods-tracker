import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkEnum } from '../../models/enums/link.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ],
})
export class NavbarComponent {
  constructor(
    public router: Router,
  ) {}

  public linkEnum: typeof LinkEnum = LinkEnum;
}

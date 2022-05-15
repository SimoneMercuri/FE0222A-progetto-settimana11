import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public oggettiTotali : number = 0;
  constructor(private carrelloService : CarrelloService) { }

  ngOnInit(): void {
    this.carrelloService.getProdotti()
    .subscribe(result => {
      this.oggettiTotali = result.length;
    })
  }

}

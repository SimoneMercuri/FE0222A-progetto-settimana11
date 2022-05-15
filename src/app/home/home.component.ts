import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prodotti: Product[] = [];

  constructor(private prodottiService: ProdottiService) { }

  ngOnInit(): void {
this.prodottiService.getProduct().subscribe(products => {this.prodotti=products;console.log(this.prodotti)})

  }



}




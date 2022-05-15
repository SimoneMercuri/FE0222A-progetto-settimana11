import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../carrello.service';
import { ProdottiService } from '../prodotti.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prodotti: Product[] = [];



  constructor(private prodottiService: ProdottiService, private carrelloService : CarrelloService) { }

  ngOnInit(): void {
this.prodottiService.getProduct().subscribe(products => {this.prodotti=products;
  this.prodotti.forEach((a:any)=>{
    Object.assign(a,{quantity:1,totale:a.price})
  });
})



  }

aggiungiCarrello(prodotto : any){
  this.carrelloService.aggiungiCarrello(prodotto);
}

}




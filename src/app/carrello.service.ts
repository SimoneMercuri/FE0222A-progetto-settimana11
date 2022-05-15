import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProdottiService } from './prodotti.service';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  public oggettoCarrello : any = []
  public listaProdotti = new BehaviorSubject<any>([])
  constructor(private prodottiService: ProdottiService) { }

  getProdotti(){
    return this.listaProdotti.asObservable();
  }

  setProdotti(prodotto : any){
    this.oggettoCarrello.push(...prodotto);
    this.listaProdotti.next(prodotto)
  }
  aggiungiCarrello(prodotto : any){
    this.oggettoCarrello.push(prodotto);
    this.listaProdotti.next(this.oggettoCarrello);
    this.prezzoTotale();
    console.log(this.oggettoCarrello)
  }

  prezzoTotale() : number{
    let totale=0;
    this.oggettoCarrello.map((a:any)=>{
      totale += a.totale;
    })
    return totale;
  }

  rimuoviOggetti(prodotto: any){
    this.oggettoCarrello.map((a:any, index:any)=>{
      if(prodotto.id===a.id){
        this.oggettoCarrello.splice(index,1);
      }
    })
this.listaProdotti.next(this.oggettoCarrello)
  }

  completaAcquisto(){
    this.oggettoCarrello=[]
    this.listaProdotti.next(this.oggettoCarrello)
  }
}



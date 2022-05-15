import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CarrelloService } from '../carrello.service';


@Component({
  selector: 'app-carello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  public prodotto : any = []
  public totale : number = 0;

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)


  });




  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  constructor(private carrelloService : CarrelloService) { }

  ngOnInit(): void {
    this.carrelloService.getProdotti()
    .subscribe(result => {
      this.prodotto = result;
      this.totale= this.carrelloService.prezzoTotale();
    })
  }

  rimuoviProdotto(prodotto:any){
    this.carrelloService.rimuoviOggetti(prodotto)
  }

  carrelloVuoto(prodotto : any){
  this.carrelloService.completaAcquisto()
}
}

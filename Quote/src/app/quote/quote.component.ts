import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
    quote=[new Quote('the purpose of life is to be happy',"Kangeri Lydia","Lydia",0,0),
    new Quote("if you find someone that you love in your life, then hang on to that love.","Princess Diana","Diana",0,0,),
    new Quote("intellectual growth should commence at birth and ease only at death.","Albert Eistein","Eistein",0,0,),
  ];
  addQuote(emittedQuote:Quote){
    this.quote.push(emittedQuote)
  }
  
  upvote(i: number){
    this.quote[i].upvote=0
  }
  downvote(i: number){
    this.quote[i].downvote=0
  }
  completeQuote(isComplete: any ,index: any){
    if(isComplete){
      let toDelete =confirm('~Are you sure you want to delete')
      this.quote.splice(index,1);
    }
  }
  addNewQuote(quote: Quote){
    let quoteLength = this.quote.length;
    quote.name =quote.name ;
    quote.quote=quote.quote;
    // quote.completeDate =new Date(quote.completeDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}

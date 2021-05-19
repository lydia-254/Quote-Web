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
  completeQuote(isComplete: any ,index: any){

  }

  constructor() { }

  ngOnInit() {
  }

}

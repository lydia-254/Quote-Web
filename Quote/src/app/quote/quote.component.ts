import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[]=[
    {quote:'the purpose of life is to be happy',author:'Kangeri Lydia',name:'Lydia'},
    {quote:'if you find someone that you love in your life, then hang on to that love.',author:'Princess Diana',name:'Diana'},
    {quote:'intellectual growth should commence at birth and ease only at death.',author:'Albert Eistein',name:'Eistein'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() messageToEmit = new EventEmitter<String>();
  messageToParent(message:String):void{
  this.messageToEmit.emit(message);
  // alert("clicked");
  }
  constructor() { }

  ngOnInit() {
  }

}



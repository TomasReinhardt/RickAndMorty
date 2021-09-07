import { Component, Input, OnInit } from '@angular/core';
import { character } from 'src/app/models/character';

@Component({
  selector: 'cardcharacter',
  templateUrl: './cardcharacter.component.html',
  styleUrls: ['./cardcharacter.component.css'],
})
export class CardcharacterComponent implements OnInit {
  @Input() character: character = new character(-1,'','','','','',{name:'',url:''},{name:'',url:''},'',[],'','');
  constructor(

  ) { }

  ngOnInit():void {

  }
}

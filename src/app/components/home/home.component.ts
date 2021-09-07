import { Component, OnInit, ViewChild } from '@angular/core';
import { character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { Global } from 'src/app/services/global';
import { CardcharacterComponent } from '../cardcharacter/cardcharacter.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CharacterService]

})
export class HomeComponent implements OnInit {
  public character: character = new character(-1,'','','','','',{name:'',url:''},{name:'',url:''},'',[],'','');
  public numero = Math.floor(Math.random() * (671 - 1) + 1);

  @ViewChild('charac') charac:any;
  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this._characterService.getCharacter(this.numero).subscribe(
      response => {
        if(response){
          this.character = response;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  random(){
    this.numero = Math.floor(Math.random() * (671 - 1) + 1);
    this.getCharacter();
  }
}

import { Component, OnInit } from '@angular/core';
import { character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { Global } from 'src/app/services/global';
import { CardcharacterComponent } from '../cardcharacter/cardcharacter.component';

@Component({
  selector: 'listcharacter',
  templateUrl: './listcharacter.component.html',
  styleUrls: ['./listcharacter.component.css'],
  providers: [CharacterService]
})
export class ListcharacterComponent implements OnInit {
  public characters: character[] = [];
  public nameSearch: string = "";

  constructor(
    private _characterService: CharacterService

  ) { }

  ngOnInit() {
    this.getCharacters();
  }
  
  getCharacters(){
    for (let index = 1; index < 35; index++) {
      this._characterService.getCharacters(index).subscribe(
        response => {
          if(response.results){
            this.characters = this.characters.concat(response.results);
          }
        },
        error => {
          console.log(error);
        }
        
      )
    }

  }

}

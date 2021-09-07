import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { Global } from 'src/app/services/global';
import { CardcharacterComponent } from '../cardcharacter/cardcharacter.component';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [CharacterService]
})
export class CharacterComponent implements OnInit {
  public character: character = new character(-1,'','','','','',{name:'',url:''},{name:'',url:''},'',[],'','');
  public id: number = -1;
  
  constructor(
    private _characterService: CharacterService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params.id;
    });
    this.getCharacter();
  }

  getCharacter(){
    this._characterService.getCharacter(this.id).subscribe(
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
}

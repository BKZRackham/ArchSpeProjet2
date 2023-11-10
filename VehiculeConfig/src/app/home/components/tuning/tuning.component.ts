import { Component, OnInit } from '@angular/core';
import { OptionsRepository } from '../../repository/options-repository';
import { Option } from '../../data/option';

@Component({
  selector: 'app-tuning',
  templateUrl: './tuning.component.html',
  styleUrls: ['./tuning.component.scss'],
})
export class TuningComponent  implements OnInit {

  types! : Option[];
  tires! : Option[];
  extras! : Option[];

  car !: Option;
  motorbike !: Option;
  hovercraft!: Option;
  hard!: Option;
  soft!: Option;
  _type !: Option;
  _tire !: Option;

  testList!:any;

  constructor(private optionsRepository: OptionsRepository) { }

  public get type() {
      return this._type;
  }
  public set type(type: Option) {
      this._type = type;
      this.onChoicesChanged();
  }

  public get tire() {
      return this._tire;
  }
  public set tire(tire: Option) {
      this._tire = tire;
      this.onChoicesChanged();
  }

 
  ngOnInit() {
    this.types = this.optionsRepository.types;
    this.tires = this.optionsRepository.tires;
    this.extras = this.optionsRepository.extras;

    this.car = this.types[0];
    this.motorbike = this.types[1];
    this.hovercraft = this.types[2];

    this.hard = this.tires[0];
    this.soft = this.tires[1];

    this.type = this.types[0];
    this.tire = this.tires[0];
    

    this.testList = [
      {option: this.extras[0], checked: false},
      {option: this.extras[1], checked: false}
   ]
  }

  onChoicesChanged(){
    console.log("bonjour");
    
    if(this.testList != undefined){
      for (let i = 0; i < this.testList.length; i++){
      
        console.log("testos   " + this.testList[i].option.name + "   " + this.testList[i].checked);
      }
    }
     
  }

  
}

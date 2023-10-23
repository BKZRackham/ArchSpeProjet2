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

  constructor(private optionsRepository: OptionsRepository) { }

  ngOnInit() {
    this.types = this.optionsRepository.types;
    this.tires = this.optionsRepository.tires;
    this.extras = this.optionsRepository.extras;
  }

}

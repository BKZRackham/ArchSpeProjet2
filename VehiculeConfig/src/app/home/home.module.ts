import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TuningComponent } from './components/tuning/tuning.component';
import { OptionsRepositoryDummyImplService } from './repository/options-repository-dummy-impl.service';
import { OptionsRepository } from './repository/options-repository';
import { RecapComponent } from './components/recap/recap.component';


@NgModule({

  providers:[{
    provide: OptionsRepository,
    useClass : OptionsRepositoryDummyImplService
  }],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
  TuningComponent,RecapComponent]
})
export class HomePageModule {}

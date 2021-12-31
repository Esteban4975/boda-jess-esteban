import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuestraBodaComponent } from './nuestra-boda/nuestra-boda.component';
import { NuestraBodaMenuComponent } from './nuestra-boda-menu/nuestra-boda-menu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { LugarComponent } from './lugar/lugar.component';
import { ProgramaComponent } from './programa/programa.component';
import { RegalosComponent } from './regalos/regalos.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import {TimelineModule} from 'primeng/timeline';
import { RecuerdosComponent } from './recuerdos/recuerdos.component';
import { VestimentaComponent } from './vestimenta/vestimenta.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {AccordionModule} from 'primeng/accordion';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NuestraBodaComponent,
    NuestraBodaMenuComponent,
    PresentacionComponent,
    LugarComponent,
    ProgramaComponent,
    RegalosComponent,
    AsistenciaComponent,
    RecuerdosComponent,
    VestimentaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    MenubarModule,
    ButtonModule,
    TimelineModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    AccordionModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    InputTextModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

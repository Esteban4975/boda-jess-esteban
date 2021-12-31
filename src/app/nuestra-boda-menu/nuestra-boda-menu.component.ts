import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-nuestra-boda-menu',
  templateUrl: './nuestra-boda-menu.component.html',
  styleUrls: ['./nuestra-boda-menu.component.css']
})
export class NuestraBodaMenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'INICIO',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'PRESENTACIÓN',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'LUGAR',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'PROGRAMA',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'REGALOS',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'ASISTENCIA',
        icon: 'pi pi-fw pi-home'
      }
  ];

  }

}

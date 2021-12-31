import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {
  events: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {status: 'Ceremonia reliogiosa', date: '15/10/2020 10:30', icon: PrimeIcons.HEART, color: '#9C27B0', image: 'game-controller.jpg'},
      {status: 'Recepción', date: '15/10/2020 14:00', icon: PrimeIcons.HEART_FILL, color: '#673AB7'},
      {status: 'Batucada', date: '15/10/2020 16:15', icon: PrimeIcons.HEART, color: '#FF9800'},
      {status: 'Fin del evento', date: '16/10/2020 10:00', icon: PrimeIcons.HEART_FILL, color: '#607D8B'}
  ];
  }

}

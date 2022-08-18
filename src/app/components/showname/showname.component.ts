import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-showname',
  templateUrl: './showname.component.html'
})
export class ShownameComponent implements OnInit, OnChanges{

  @Input() nombre!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {
  }

}

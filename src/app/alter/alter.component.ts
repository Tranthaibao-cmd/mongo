import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.scss']
})
export class AlterComponent implements OnInit {

  @Input() content;
  left = (window.innerWidth - 250)/2 + 'px'
  constructor() { }


  ngOnInit(): void {
  }

}

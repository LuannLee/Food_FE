import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cities : any = [
    {value: 'steak-0', viewValue: 'Hải Phòng'},
    {value: 'pizza-1', viewValue: 'Hà Nội'},
    {value: 'tacos-2', viewValue: 'Đà Nẵng'}
  ]

  public foods : any = [
    {value: 'steak-0', viewValue: 'Đồ uống'},
    {value: 'pizza-1', viewValue: 'Đồ ăn nhanh'},
    {value: 'tacos-2', viewValue: 'Kem'}
  ]

  constructor() { }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { API_ABSTRACT } from '../../services/api/api.abstract';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list$ : any;
  constructor( private api: API_ABSTRACT ){}

  ngOnInit(): void {
    this.list$ = this.api.getApiData()
  }



}

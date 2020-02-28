import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { travels } from './travels'
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
	travels=travels;

	description:boolean = false;

	constructor() { }
	
	descshow()
	{
		
		this.description=!this.description;

	};


	ngOnInit()
	{

	}

}

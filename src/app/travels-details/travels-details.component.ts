import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { travels } from '../travel/travels'

@Component({
  selector: 'app-travels-details',
  templateUrl: './travels-details.component.html',
  styleUrls: ['./travels-details.component.scss']
})
export class TravelsDetailsComponent implements OnInit {
	travel;
	constructor(private route: ActivatedRoute, private cartService: CartService) { }

	addToCart(product)
	{
		window.alert("Cart");
		this.cartService.addToCart(product);
	}



	ngOnInit() 
	{
	this.route.paramMap.subscribe(params => {
	this.travel = travels[+params.get('productId')];
	});
	}
}

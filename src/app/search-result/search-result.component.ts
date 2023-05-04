import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/list.service';
import { Food } from '../data-type';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResult:undefined|Food[];

  constructor(private route: ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let query = params['query'];
      console.warn(query);
      query && this.product.searchProduct(query).subscribe((result)=>{
        this.searchResult=result;
        console.log(result);
      })
    });
  }

}

import { Component } from '@angular/core';
import { Food } from '../data-type';
import { foodData } from '../data';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../services/list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  // query: string = "";
  querymodel: string = "";

  fooddata: Food[] = foodData;
  searchResult:undefined|Food[];

  constructor(private route: ActivatedRoute, private router: Router, private product:ProductService) { }

  ngOnInit(): void {
    let query = this.route.snapshot.queryParamMap.get('query');
    console.warn(query);
    query && this.route.queryParams.subscribe(params => {
      query = params['query'];
      console.log(params);
    });
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
        console.log(result);
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined
  }
  submitSearch(val:string){
    console.warn(val)
    this.router.navigate([`search/${val}`]);
  }


}

import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { Food } from '../data-type';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../services/list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchResult: undefined | Food[];
  searchResults: string = "";

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private product: ProductService, 
    private cdRef: ChangeDetectorRef,
    private zone: NgZone
  ) { }


  ngOnInit(): void {

    if (this.router.url !== '/search/') {
      this.searchResult = undefined;
      this.cdRef.detectChanges();
      this.router.navigateByUrl('/search/');
    }

    this.route.params.subscribe(params => {
      let query = params['query'];
      console.warn(query);
      query && this.zone.run(() => {
        this.product.searchProduct(query).subscribe((result)=>{
          this.searchResult=result;
          if(this.searchResult?.length<1){
            this.searchResults = "no results found";
          }
            console.log(result);
          this.cdRef.detectChanges();
        })
      });
    });
  }

  submitSearch(val: string){
    console.warn(val)
    this.router.navigate([`search/${val}`]);
  }

}


// searchProduct(query:KeyboardEvent){
  //   if(query){
  //     const element = query.target as HTMLInputElement;
  //     this.product.searchProduct(element.value).subscribe((result)=>{
  //       console.log(result);
  //       if(result.length>5){
  //         result.length=length
  //       }
  //       this.searchResult=result;
  //       console.log(this.searchResult);
  //     })
  //   }
  // }

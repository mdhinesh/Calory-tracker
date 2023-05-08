import { Component, OnInit } from '@angular/core';

declare const customElements: any;
declare global {
  interface Window {
    [key: string]: any;
  }
}


@Component({
  selector: 'app-expertrec-search',
  templateUrl: './expertrec-search.component.html',
  styleUrls: ['./expertrec-search.component.scss']
})
export class ExpertrecSearchComponent implements OnInit {

  ngOnInit() {
    const id = '430ccc48-e8aa-11ed-b402-0242ac130002';
    const ci_search = document.createElement('script');
    ci_search.type = 'text/javascript';
    ci_search.async = true;
    ci_search.src = 'https://cse.expertrec.com/api/js/ci_common.js?id=' + id;
    ci_search.onload = () => {
      customElements.define('ci-search', window['CiSearch'] as any);
    };
    document.body.appendChild(ci_search);
  }

}

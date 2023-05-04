import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'google-Oauth-3';


  ngOnInit(): void {
      
  }

}
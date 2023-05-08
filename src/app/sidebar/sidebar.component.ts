import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private sidebarService: NbSidebarService) {
  }

  hideSidebar(){
    this.sidebarService.toggle(false, 'left');
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() helpTitle: string;

  userStatusColor = 'warn';
  counter = 0;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getCartTotal().subscribe((res) => {
      this.counter = res;
    });

    this.backendService.getUserStatus().subscribe((res) => {
      this.userStatusColor = res ? 'primary' : 'warn';
    });
  }

}

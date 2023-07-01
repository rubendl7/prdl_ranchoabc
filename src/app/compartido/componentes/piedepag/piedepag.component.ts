import { Component } from '@angular/core';

@Component({
  selector: 'app-piedepag',
  templateUrl: './piedepag.component.html',
  styleUrls: ['./piedepag.component.scss']
})
export class PiedepagComponent {
  hoy = new Date();
  miYear = this.hoy.getFullYear();
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Vinodh Kumar Thimmisetty';
  feature = 'recipe';

  featureSelected(feature: string) {
    this.feature = feature;
  }
}

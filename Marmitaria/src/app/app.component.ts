import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 5
  loadedFeature = 'packages';
  //6
  OnNavigate(feature: string){
    this.loadedFeature=feature;
  }


  title = 'Marmitaria';
}

import { Component } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {

  selectedPackage !: Package;

}

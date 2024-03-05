import { Component } from '@angular/core';
import { Package } from './package.model';
import { PackageService } from './package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers: [PackageService]
})
export class PackagesComponent {
  selectedPackage !: Package;

}

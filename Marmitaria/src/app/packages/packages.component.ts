import { Component, OnDestroy, OnInit } from '@angular/core';
import { Package } from './package.model';
import { PackageService } from './package.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers: [PackageService]
})
export class PackagesComponent implements OnInit, OnDestroy{
  selectedPackage !: Package;
  subscription: Subscription = new Subscription();

  constructor(private packageService: PackageService){
  }



  ngOnInit(): void {
    this.subscription = this.packageService.packageSelected.subscribe((selectedPackage: Package )=>{
      this.selectedPackage = selectedPackage
    })
  }


   // limpandoMemoria - EntenderMemolik
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

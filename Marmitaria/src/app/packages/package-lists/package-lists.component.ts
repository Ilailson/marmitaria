import { Component} from '@angular/core';
import { Package } from '../package.model';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-lists',
  templateUrl: './package-lists.component.html',
  styleUrls: ['./package-lists.component.css']
})
export class PackageListsComponent {

  packages?: Package[];

constructor(private packageService: PackageService){}

ngOnInit(): void {
  this.packages = this.packageService.getPackages();
}

}

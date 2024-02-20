import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Package } from '../../package.model';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.css']
})
export class PackageItemComponent {

@Input() package!: Package;
@Output() packageSelected = new EventEmitter<void>();

constructor() {

}

ngOnInit(){
  
}

onSelected(){
  this.packageSelected.emit();
  // ir para o pai
}

}

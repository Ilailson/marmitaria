import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Package } from '../../package.model';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.css']
})
export class PackageItemComponent {
  @Input() package!: Package;
  // sem retorno - disparar evento
  @Output() packageSelected = new EventEmitter<void>()


  onSelected(){
    this.packageSelected.emit();
  }
}

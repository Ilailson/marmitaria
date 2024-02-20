import { Component, EventEmitter, Output } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-lists',
  templateUrl: './package-lists.component.html',
  styleUrls: ['./package-lists.component.css']
})
export class PackageListsComponent {


@Output() packageWasSelected = new EventEmitter<Package>()

onPackageSelected( packageSelected: Package) {
  this.packageWasSelected.emit(packageSelected)
}


packages: Package [] = [
  new Package('Churrasco', 'Churraco de fraudinha','https://as2.ftcdn.net/v2/jpg/04/26/44/83/1000_F_426448379_eJRZjHMbhKJKxtpbj76rV1wTIljfAHCe.jpg'),
  new Package('Salmão', 'Peixe ótimo','https://media.istockphoto.com/id/1214416414/pt/foto/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=SVk3tajK5ZdUNZn24Sx99AJtBjEbKf-qsmL9_Hk_YPw=')
];

}

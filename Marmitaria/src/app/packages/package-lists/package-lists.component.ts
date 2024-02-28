import { Component, EventEmitter, Output } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-lists',
  templateUrl: './package-lists.component.html',
  styleUrls: ['./package-lists.component.css']
})
export class PackageListsComponent {
packages: Package [] = [
  new Package('Churrasco', 'Churraco de fraudinha','https://as2.ftcdn.net/v2/jpg/04/26/44/83/1000_F_426448379_eJRZjHMbhKJKxtpbj76rV1wTIljfAHCe.jpg'),
  new Package('Salmão', 'Uma delicia','https://img.freepik.com/fotos-gratis/salmao-grelhado-com-salada_2829-19756.jpg?t=st=1709152629~exp=1709153229~hmac=bc4af3cc9590a40bdd2b281bd26df70c9c69dd7ba9ff8377b9f1dae33b50f2a3')
];

@Output() packageWasSelected = new EventEmitter<Package>();

// recebendo marmita do tip package
onPackageSelected(packageSelected: Package)
{
  this.packageWasSelected.emit(packageSelected)
}

}

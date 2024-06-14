import {Component, input} from '@angular/core';
import {MainbuttonComponent} from "../buttons/mainbutton/mainbutton.component";
import {IconsComponent} from "../icons/icons.component";
import {take} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainbuttonComponent, IconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {


  listPath = [
    {name: 'o nas', urlAdres: 'about'},
    {name: 'dostawa i płatność', urlAdres: 'payAndDelvery'},
    {name: 'katalog', urlAdres: 'catalog'},
    {name: 'kontakt', urlAdres: 'contact'},
  ]

  imagePath = "img/headerImageFirst.jpeg"


  //content to heder descyptrion
  tekstHeader = ['Kompozycje, które mówią więcej niż słowa']
  numberRandom = Math.floor(Math.random() * this.tekstHeader.length);


  activeMobileView:boolean = true
  changeView(){
    this.activeMobileView = !this.activeMobileView;
  }

}

import { Component ,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showtime';
  // --------------NavBar color chnage on scroll-------------------
  navbarBackgorund:any;

  @HostListener('document:scroll')scrollOver(){

    // --------------shows the scroll Length
    console.log(document.body.scrollTop,'scrollLength#');

    if(document.body.scrollTop>0 || document.documentElement.scrollTop>0)
    {
        this.navbarBackgorund={
           'background-color':'#eee'
        }
    }
    else{
       this.navbarBackgorund={}
    }

  }
}

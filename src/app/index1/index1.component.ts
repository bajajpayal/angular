import { 
    Component,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css'],
  animations: [
    trigger('slideInOut', [
        state('active', style({ height: 'auto', display: 'block'})),
        state('inactive', style({height: '0px' , padding: 0, display: 'none' })),
        transition('1 => 0', animate('500ms ease-in')),
        transition('0 => 1', animate('10s ease-out'))
    ])
  
  ]
})
export class IndexComponent implements OnInit {
  state: string = 'inactive';

    toggleMove() {
      alert("hello");
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
   ngOnInit(): void {
      this.toggleMove();
     
  }
  
}




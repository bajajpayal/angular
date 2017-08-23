import { 
    Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';


@Component({
  selector: 'my-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
        state('active', style({ height: 'auto', display: 'block'})),
        state('inactive', style({height: '0px' , padding: 0, display: 'none' })),
        transition('1 => 0', animate('500ms ease-in')),
        transition('0 => 1', animate('500ms ease-out'))
    ])
    
  ]

})
export class HeaderComponent {
  
  state: string = 'inactive';

    toggleMove() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
  
}

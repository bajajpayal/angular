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
  selector: 'my-Header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css'],
  animations: [
    trigger('slideInOut', [
        state('active', style({ height: 'auto', display: 'block'})),
        state('inactive', style({height: '0px' , padding: 0, display: 'none' })),
        transition('1 => 0', animate('500ms ease-in')),
        transition('0 => 1', animate('500ms ease-out'))
    ])
    
  ]

})
export class Header1Component {
  
  state: string = 'inactive';

    toggleMove() {
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
  
}

import { 
    Component,
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes
 } from '@angular/core';
import {Collapse} from './collapse.component';



@Component({
  selector: 'my-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('slideInOut', [
        state('active', style({ height: 'auto', display: 'block'})),
        state('inactive', style({height: '0px' , padding: 0, display: 'none' })),
        transition('1 => 0', animate('500ms ease-in')),
        transition('0 => 1', animate('500ms ease-out'))
    ])
    
  ]

  

})
export class MainComponent {
   private isCollapsed: boolean = false;
    state: string = 'inactive';
     state1: string = 'inactive';
         state2: string = 'inactive';
             state3: string = 'inactive';
     
     
     
     sign:string = 'right'; 
   
    toggleMove(a:string):void {
        
    console.log(a);
    if(a=="0")
     {
       
        this.state = (this.state === 'inactive' ? 'active' : 'inactive');
        this.state1='inactive';
         this.state2='inactive';
          this.state3='inactive';
          
     }
      if(a=="1")
     {
       
        this.state1 = (this.state1 === 'inactive' ? 'active' : 'inactive');
         this.state='inactive';
         this.state2='inactive';
          this.state3='inactive';
     }
      if(a=="2")
     {
       
        this.state2 = (this.state2 === 'inactive' ? 'active' : 'inactive');
         this.state1='inactive';
         this.state='inactive';
          this.state3='inactive';
     }
      if(a=="3")
     {
       
        this.state3 = (this.state3 === 'inactive' ? 'active' : 'inactive');
         this.state1='inactive';
         this.state2='inactive';
          this.state='inactive';
     }
         if(this.sign == 'right') {
       this.sign = 'bottom';
     } else {
       this.sign = 'right';
     }
    }
  

}

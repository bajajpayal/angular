import { 
    Component,Input,
     OnChanges,
 } from '@angular/core';
 import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
 import { FormOne } from '../dataModel';
 import { LocalStorageService } from 'angular-2-local-storage';
//  import { Beautiful, beautiful} from '../dataModel';
//   import { BeautyService } from '../checkout.service';

 const formdata:FormOne[]=[]; 
@Component({
  selector: 'app-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.css'],
  // providers:[ BeautyService ]
 
})
export class StepOneComponent  {
   
  heroForm: FormGroup;
  checkstatus : {name : string;status : number}[]=[];  
  private selectedLink: string="beautiful"; 
   private select1: string="true";  
  private selected1: string=""; 
  private i: Number=0; 
   private totalAmt: Number=0; 
   private color1:string="red";
   private  isActive: Boolean=false;
   private classList = ['active1', 'active2'];
   
   constructor(
    private fb: FormBuilder,
    private localStorageService: LocalStorageService) {
       this.createForm();
      
    }
      createForm() {
    this.heroForm = this.fb.group({
      pretty:'',
      beautiful:'',
      glamorous:'',
      blowout_pretty:'0',
      downdo_pretty:'0',
      updo_pretty:'0',
      clipin_pretty:'0',
      glammakeup_pretty:'0',
      glambrush_pretty:'0',
      touchup_pretty:'0',
      glamtouch_pretty:'0',
       blowout_beautiful:'0',
      downdo_beautiful:'0',
      updo_beautiful:'0',
      clipin_beautiful:'0',
      glammakeup_beautiful:'0',
      glambrush_beautiful:'0',
      touchup_beautiful:'0',
      glamtouch_beautiful:'0',
       blowout_glamorous:'0',
      downdo_glamorous:'0',
      updo_glamorous:'0',
      clipin_glamorous:'0',
      glammakeup_glamorous:'0',
      glambrush_glamorous:'0',
      touchup_glamorous:'0',
      glamtouch_glamorous:'0',
      totalamt_beautiful:'',
      totalamt_pretty:'',
      totalamt_glamorous:''
    
    });
  }
  clicked(event)
  {
     event.target.classList.add('active1');
     alert("added");
  }
   increment(e: string): void 
   {
     
          this.i=1;
          
     
     this.selected1=e;
          const formModel = this.heroForm.value;
          if(this.selected1 === 'blowout0')
          {
           this.heroForm.patchValue({
            
                  blowout_pretty: Number(formModel.blowout_pretty)+1,
                   
                }); 
              
          } 
           if(this.selected1 === 'downdo0')
          {
           this.heroForm.patchValue({
                  downdo_pretty: Number(formModel.downdo_pretty)+1, 
                }); 
          } 
           if(this.selected1 === 'updo0')
          {
           this.heroForm.patchValue({
                  updo_pretty: Number(formModel.updo_pretty)+1, 
                }); 
          } 
           if(this.selected1 === 'clipin0')
          {
           this.heroForm.patchValue({
                  clipin_pretty: Number(formModel.clipin_pretty)+1, 
                }); 
          } 
           if(this.selected1 === 'glammakeup0')
          {
           this.heroForm.patchValue({
                  glammakeup_pretty: Number(formModel.glammakeup_pretty)+1, 
                }); 
          } 
           if(this.selected1 === 'glambrush0')
          {
           this.heroForm.patchValue({
                  glambrush_pretty: Number(formModel.glambrush_pretty)+1, 
                }); 
          } 
           if(this.selected1 === 'touchup0')
          {
           this.heroForm.patchValue({
                  touchup_pretty: Number(formModel.touchup_pretty)+1, 
                }); 
          } 
           if(this.selected1 === 'glamtouch_pretty')
          {
           this.heroForm.patchValue({
                  glamtouch_pretty: Number(formModel.glamtouch_pretty)+1, 
                }); 
          } 
  
       if(this.selected1 === 'blowout1')
          {
           this.heroForm.patchValue({ 
                  blowout_beautiful: Number(formModel.blowout_beautiful)+1,
                   
                }); 
              
          } 
           if(this.selected1 === 'downdo1')
          {
           this.heroForm.patchValue({
                  downdo_beautiful: Number(formModel.downdo_beautiful)+1, 
                }); 
          } 
           if(this.selected1 === 'updo1')
          {
           this.heroForm.patchValue({
                  updo_beautiful: Number(formModel.updo_beautiful)+1, 
                }); 
          } 
           if(this.selected1 === 'clipin1')
          {
           this.heroForm.patchValue({
                  clipin_beautiful: Number(formModel.clipin_beautiful)+1, 
                }); 
          } 
           if(this.selected1 === 'glammakeup1')
          {
           this.heroForm.patchValue({
                  glammakeup_beautiful: Number(formModel.glammakeup_beautiful)+1, 
                }); 
          } 
           if(this.selected1 === 'glambrush1')
          {
           this.heroForm.patchValue({
                  glambrush_beautiful: Number(formModel.glambrush_beautiful)+1, 
                }); 
          } 
           if(this.selected1 === 'touchup1')
          {
           this.heroForm.patchValue({
                  touchup_beautiful: Number(formModel.touchup_beautiful)+1, 
                }); 
          } 
           if(this.selected1 === 'glamtouch_beautiful')
          {
           this.heroForm.patchValue({
                  glamtouch_beautiful: Number(formModel.glamtouch_beautiful)+1, 
                }); 
          } 
          if(this.selected1 === 'blowout2')
          {
           this.heroForm.patchValue({
                  blowout_glamorous: Number(formModel.blowout_glamorous)+1,               
                }); 
              
          } 
           if(this.selected1 === 'downdo2')
          {
           this.heroForm.patchValue({
                  downdo_glamorous: Number(formModel.downdo_glamorous)+1, 
                }); 
          } 
           if(this.selected1 === 'updo2')
          {
           this.heroForm.patchValue({
                  updo_glamorous: Number(formModel.updo_glamorous)+1, 
                }); 
          } 
           if(this.selected1 === 'clipin2')
          {
           this.heroForm.patchValue({
                  clipin_glamorous: Number(formModel.clipin_glamorous)+1, 
                }); 
          } 
           if(this.selected1 === 'glammakeup2')
          {
           this.heroForm.patchValue({
                  glammakeup_glamorous: Number(formModel.glammakeup_glamorous)+1, 
                }); 
          } 
           if(this.selected1 === 'glambrush2')
          {
           this.heroForm.patchValue({
                  glambrush_glamorous: Number(formModel.glambrush_glamorous)+1, 
                }); 
          } 
           if(this.selected1 === 'touchup2')
          {
           this.heroForm.patchValue({
                  touchup_beautiful: Number(formModel.touchup_glamorous)+1, 
                }); 
          } 
           if(this.selected1 === 'glamtouch_glamorous')
          {
           this.heroForm.patchValue({
                  glamtouch_glamorous: Number(formModel.glamtouch_glamorous)+1, 
                }); 
          } 
          this. icrementamt() ;
            
    }
    decrement(e: string): void 
   {
     
          this.i=1;
        
     this.selected1=e;
          const formModel = this.heroForm.value;
          if(this.selected1 === 'blowout0')
          {
            if(Number(formModel.blowout_pretty)>0)
                {
                  this.heroForm.patchValue({
            
                  blowout_pretty: Number(formModel.blowout_pretty)-1,
                   
                }); 
                }
              
          } 
           if(this.selected1 === 'downdo0')
          {
             if(Number(formModel.downdo_pretty)>0)
            {
                this.heroForm.patchValue({
                  downdo_pretty: Number(formModel.downdo_pretty)-1, 
                }); 
            }
          } 
           if(this.selected1 === 'updo0')
          {
            if(Number(formModel.updo_pretty)>0)
            {
                this.heroForm.patchValue({
                  updo_pretty: Number(formModel.updo_pretty)-1, 
                });
            }    
          } 
           if(this.selected1 === 'clipin0')
          {
            if(Number(formModel.clipin_pretty)>0)
            {
                this.heroForm.patchValue({
                  clipin_pretty: Number(formModel.clipin_pretty)-1, 
                }); 
            }   
          } 
           if(this.selected1 === 'glammakeup0')
          {
             if(Number(formModel.glammakeup_pretty)>0)
            {
                 this.heroForm.patchValue({
                  glammakeup_pretty: Number(formModel.glammakeup_pretty)-1, 
                }); 
            }   
          } 
           if(this.selected1 === 'glambrush0')
          {
             if(Number(formModel.glambrush_pretty)>0)
            {
              this.heroForm.patchValue({
                  glambrush_pretty: Number(formModel.glambrush_pretty)-1, 
                }); 
            }
          } 
           if(this.selected1 === 'touchup0')
          {
             if(Number(formModel.touchup_pretty)>0)
            {
               this.heroForm.patchValue({
                  touchup_pretty: Number(formModel.touchup_pretty)-1, 
                }); 
            }   
          } 
          
  
  
       if(this.selected1 === 'blowout1')
          {
            if(Number(formModel.blowout_beautiful)>0)
            {
           this.heroForm.patchValue({
                  blowout_beautiful: Number(formModel.blowout_beautiful)-1, 
                }); 
          } 
          }
           if(this.selected1 === 'downdo1')
          {
            if(Number(formModel.downdo_beautiful)>0)
            {
           this.heroForm.patchValue({
                  downdo_beautiful: Number(formModel.downdo_beautiful)-1, 
                }); 
            }
          } 
           if(this.selected1 === 'updo1')
          {
              if(Number(formModel.updo_beautiful)>0)
            {
           this.heroForm.patchValue({
                  updo_beautiful: Number(formModel.updo_beautiful)-1, 
                });
            } 
          } 
           if(this.selected1 === 'clipin1')
          {
             if(Number(formModel.clipin1_beautiful)>0)
            {
           this.heroForm.patchValue({
                  clipin_beautiful: Number(formModel.clipin_beautiful)-1, 
                }); 
            }
          } 
           if(this.selected1 === 'glammakeup1')
          {
             if(Number(formModel.glammakeup_beautiful)>0)
            {
           this.heroForm.patchValue({
                  glammakeup_beautiful: Number(formModel.glammakeup_beautiful)-1, 
                }); 
            }
          } 
           if(this.selected1 === 'glambrush1')
          {
             if(Number(formModel.glambrush_beautiful)>0)
            {
           this.heroForm.patchValue({
                  glambrush_beautiful: Number(formModel.glambrush_beautiful)-1, 
                }); 
            }
          } 
           if(this.selected1 === 'touchup1')
          {
             if(Number(formModel.touchup_beautiful)>0)
            {
           this.heroForm.patchValue({
                  touchup_beautiful: Number(formModel.touchup_beautiful)-1, 
                }); 
            }
          } 
            if(this.selected1 === 'blowout2')
          {
              if(Number(formModel.blowout_glamorous)>0)
            {
                this.heroForm.patchValue({
                  blowout_glamorous: Number(formModel.blowout_glamorous)-1,               
                }); 
            }   
              
          } 
           if(this.selected1 === 'downdo2')
          {
             if(Number(formModel.downdo_glamorous)>0)
            {
              this.heroForm.patchValue({
                  downdo_glamorous: Number(formModel.downdo_glamorous)-1, 
                }); 
            }  
          } 
           if(this.selected1 === 'updo2')
          {
             if(Number(formModel.updo_glamorous)>0)
            {
              this.heroForm.patchValue({
                  updo_glamorous: Number(formModel.updo_glamorous)-1, 
                });
            }   
          } 
           if(this.selected1 === 'clipin2')
          {
             if(Number(formModel.clipin_glamorous)>0)
            {
                this.heroForm.patchValue({
                  clipin_glamorous: Number(formModel.clipin_glamorous)-1, 
                }); 
            }   
          } 
           if(this.selected1 === 'glammakeup2')
          {
               if(Number(formModel.glammakeup_glamorous)>0)
            {
               this.heroForm.patchValue({
                  glammakeup_glamorous: Number(formModel.glammakeup_glamorous)-1, 
                }); 
            }   
          } 
           if(this.selected1 === 'glambrush2')
          {
            if(Number(formModel.glambrush_glamorous)>0)
            {
                this.heroForm.patchValue({
                  glambrush_glamorous: Number(formModel.glambrush_glamorous)-1, 
                }); 
            }   
          } 
           if(this.selected1 === 'touchup2')
          {
            if(Number(formModel.touchup_glamorous)>0)
            {
               this.heroForm.patchValue({
                  touchup_beautiful: Number(formModel.touchup_glamorous)-1, 
                });
            }    
          } 
          
          this. icrementamt() ;
            
    }
    icrementamt()
    {
      const formModel = this.heroForm.value;
      this.heroForm.patchValue({
             //totalamt_beautiful:Number(formModel.blowout_beautiful)*70, 
                
                  totalamt_beautiful:(Number(formModel.blowout_beautiful)*70) +(Number(formModel.downdo_beautiful)*70)+(Number(formModel.updo_beautiful)*85) 
                                     +(Number(formModel.glammakeup_beautiful)*95) +(Number(formModel.glambrush_beautiful)*135)+ (Number(formModel.touchup_beautiful)*30)+
                                     (Number(formModel.glamtouch_beautiful)*100) , 
                  totalamt_pretty:(Number(formModel.blowout_pretty)*40) +(Number(formModel.downdo_pretty)*40)+(Number(formModel.updo_pretty)*55) 
                                     +(Number(formModel.glammakeup_pretty)*60) +(Number(formModel.glambrush_pretty)*100)+ (Number(formModel.touchup_pretty)*30)+
                                     (Number(formModel.glamtouch_pretty)*100) , 
                  totalamt_glamorous:(Number(formModel.blowout_glamorous)*175) +(Number(formModel.downdo_glamorous)*175)+(Number(formModel.updo_glamorous)*195) 
                                     +(Number(formModel.glammakeup_glamorous)*250) +(Number(formModel.glambrush_glamorous)*290)+ (Number(formModel.touchup_glamorous)*30)+
                                     (Number(formModel.glamtouch_glamorous)*100) ,
                }); 
                
    }
     isSelected2(): boolean
     {
       if(this.i==1)
       {
       return true;
      }
      
     }
   isSelected1(name: string): boolean   
  {  
      
      
        // if (!this.selected1) { // if no radio button is selected, always return false so every nothing is shown  
        //     return false;  
        //     }  
        for(let j=0;j<this.checkstatus.length;j++)
        {
          
          if(name===this.checkstatus[j].name)
          {
          return true;
          }


        }

        if(this.selected1===name)
        {
          this.checkstatus.push({"name":name,"status":1});
        }
  
        return (this.selected1=== name); // if current radio button is selected, return true, else return false  
    }
  setradio(e: string): void   
  {  
    if(e==='pretty')
    {
      alert("hello");
        this.classList = ['active1', 'active2'];
    }
    
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
    
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
            }  
       
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }
    


  //   onSubmit() {
  //   this.beauty = this.prepareSave();
   
  // }
  // prepareSave(): Beautiful {
  //   const formModel = this.heroForm.value;
    
  //   const save1: Beautiful = {
  //     blowout:formModel.blowout_beautiful,
  //     downdo:formModel.downdo_beautiful,
  //     updo:formModel.updo_beautiful,
  //     clipin:formModel.clipin_beautiful,
  //     glammakeup:formModel.glammakeup_beautiful,
  //     glambrush:formModel.glambrush_beautiful,
  //     touchup:formModel.touchup_beautiful,
  //     glamtouch:formModel.glamtouch_beautiful,
     
  //   };
  //   return save1;
  // }  

// onsubmit : void{
//   const data1={
  
//        blowout_beautiful:'0',
//       downdo_beautiful:'0',
//       updo_beautiful:'0',
//       clipin_beautiful:'0',
//       glammakeup_beautiful:'0',
//       glambrush_beautiful:'0',
//       touchup_beautiful:'0',
//       glamtouch_beautiful:'0',
     
    
//       totalamt_beautiful:''
    

//   }

// }
onSubmit()
{
    const data1={
  
       blowout_beautiful:'0',
      downdo_beautiful:'0',
      updo_beautiful:'0',
      clipin_beautiful:'0',
      glammakeup_beautiful:'0',
      glambrush_beautiful:'0',
      touchup_beautiful:'0',
      glamtouch_beautiful:'0',
     
    
      totalamt_beautiful:''
    }
     localStorage.setItem('test', JSON.stringify(data1));
     alert("saved");

}

  
}




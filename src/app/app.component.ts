import { Component } from '@angular/core';
import {FormControl, NgForm, NgModel,} from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'project3';
  fullName:string=''
  onsubmit(f:NgForm){
  console.log(f.value);
}

getValue(f:FormControl){
  console.log(f);
}


}

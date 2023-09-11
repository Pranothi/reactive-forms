import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent {
  
  myForm:FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    const cphone = this.fb.group({
      area: [],
      pincode: [],
      line: [],
    })

    const hphone = this.fb.group({
      area: [],
      pincode: [],
      line: [],
    })

    this.myForm = this.fb.group({
      email: '',
      cellPhone: cphone,
      homePhone: hphone
    })
  }
}

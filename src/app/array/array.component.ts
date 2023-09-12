import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })
  }

  get phoneForms(){
    return this.myForm.get('phones') as FormArray
  }

  addPhone(){
    const phone = this.fb.group({
      area: [],
      pincode: [],
      line: [],
    })
    this.phoneForms.push(phone)
  }

  deletePhone(i){
    this.phoneForms.removeAt(i)
  }
}

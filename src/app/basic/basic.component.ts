import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {

  // name = new FormControl('');

  myForm = this.fb.group({
    email: '',
    message: '',
    carrer: ''
  })

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.myForm.valueChanges.subscribe(console.log)
  }

}

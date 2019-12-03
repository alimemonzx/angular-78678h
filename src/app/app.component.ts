import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
   jsonForm: FormGroup;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.jsonForm = this._fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      spouse: this._fb.array([])
    })
  }
  get spouseFormControl() {
    return this.jsonForm.get('spouse') as FormArray;
  }
  addSpouseField() {
    this.spouseFormControl.push(this.spouseForm());
  }
  spouseForm() {
    return this._fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    })
  }
}

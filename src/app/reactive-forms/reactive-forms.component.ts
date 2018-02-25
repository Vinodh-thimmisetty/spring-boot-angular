import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  genders = ['male', 'female'];
  signUpForm: FormGroup;

  forbiddenUserNames = ['Pavan', 'Vadan'];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.validateUserName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.asynValidateEmails),
       }),
      'secretQuestion': new FormControl(null, Validators.required),
      'secretAnswer': new FormControl(null, Validators.required),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });


    this.signUpForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );

    this.signUpForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );

    /*
    this.signUpForm.setValue({
      // Load all Form Values

    });
    */
  /*
   this.signUpForm.patchValue({
      // Load only Specific Values
    });
 */


  }

  suggestUserName() {
    // Suggested Name
    this.signUpForm.patchValue({
        username: 'Vinodh Kumar Thimmisetty'
    });
  }

  onSubmitForm() {
    console.log(this.signUpForm);
  }

  addNewHobby() {
    console.log('Add New Hobby');
    const frmCtrl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies'))
                    .push(frmCtrl);
  }

  validateUserName(frmCtrl: FormControl): { [key: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(frmCtrl.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  asynValidateEmails(frmCtrl: FormControl): Promise<any> | Observable<any> {
    // Async Load Data
    const samplePromise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
            if (frmCtrl.value === 'test@test.com') {
                resolve({'emailIsForbidden': true});
            } else {
              resolve(null);
            }
        }, 1500);
      });
  return samplePromise;
  }


}

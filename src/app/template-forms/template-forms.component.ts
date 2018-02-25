import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  @ViewChild('formData') formData: NgForm;


  defaultQuestion = 'pet';
  defaultEmail = 'vinodh5052@gmail.com';
  answer = '';
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender:''
  };

  isFormSubmitted = false;

  constructor() {
  }

  suggestUserName() {
    // Default Selection of UserName Property
    const suggestName = 'Vinodh Kumar Thimmisetty';
    // To Set All the Form Values which will override all existing form values
   /* this.formData.setValue({
      userSubmittedData: {
        username: suggestName,
        email: ''
      },
      secret: 'pet',
      secretAnswer: 'Sample Text Area',
      gender: 'male'
    });*/
    // To set or override only specifc Form Data Values
    this.formData.form.patchValue({
      userSubmittedData: {
        username: suggestName
      },
    });

  }

  ngOnInit() {
  }

  /*
  onSubmitForm(formData: HTMLFormElement) {
    console.log('Submitted !!', formData);
  }*/

  /*
  onSubmitForm(formData: NgForm) {
    console.log('Submitted !!', formData);
  }
  */

  onSubmitForm() {
    this.isFormSubmitted = true;
    console.log('Submitted !!');
    this.user.username = this.formData.value.userSubmittedData.username;
    this.user.email = this.formData.value.userSubmittedData.email;
    this.user.secretQuestion = this.formData.value.secret;
    this.user.secretAnswer = this.formData.value.secretAnswer;
    this.user.gender = this.formData.value.gender;

    // Clear all the Values if Form is submitted
    this.formData.reset(this.isFormSubmitted);
  }
}

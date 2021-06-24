import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fg!: FormGroup;

  ngOnInit() {

    this.fg = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'phone': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'ipAddress': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$')
        ])
    });
  }

  clicksub() {
    console.log(this.fg.value);
    this.fg.reset();
  }
  get name() {
    return this.fg.get('name');
  }
  get email() {
    return this.fg.get('email');
  }
  get phone() {
    return this.fg.get('phone');
  }
  get ipAddress() {
    return this.fg.get('ipAddress');
  }

}

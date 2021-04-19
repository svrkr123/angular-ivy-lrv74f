import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  name = "this is Sample";
  gender = "Male";
  bbb = "branch"
;
  constructor() { }

  ngOnInit() {
  }

}
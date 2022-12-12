import { Component, OnInit } from '@angular/core';
import { NgxSwissFiveRappenChfPipe } from 'ngx-swiss-five-rappen-chf-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-swiss-5-rappen-pipe-example';

  inputValue = 2.034;
  outputValue!: number;

  ngOnInit() {
    const pipe = new NgxSwissFiveRappenChfPipe();
    this.outputValue = pipe.transform(this.inputValue);
    console.debug('🔥 output', this.outputValue);
  }

}

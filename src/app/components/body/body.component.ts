import { Component } from '@angular/core';
import { VerstradeService } from 'src/app/service/verstrade.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  dateTimeValue: any;

  constructor(private service: VerstradeService){}

  ngOnInit(): void {
    this.getMethod();
  }

  
  getMethod() {
    this.service.getData().subscribe((getdate) => {
      console.log(getdate, "Hi");
      this.dateTimeValue = getdate.data.timestamp;
      console.log(getdate.data.timestamp, "Hi");
    });
  }
}

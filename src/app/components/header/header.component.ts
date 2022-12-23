import { Component, OnInit } from '@angular/core';
import { VerstradeModel } from 'src/app/service/verstrade.model';
import { VerstradeService } from 'src/app/service/verstrade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

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

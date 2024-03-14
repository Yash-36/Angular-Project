import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UpperCasePipe,TitleCasePipe,LowerCasePipe,SlicePipe,PercentPipe,CurrencyPipe,JsonPipe,DatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = "yash chandra"
  salary = 123.4567
  per = 0.18
  person = {name : "yash" , age : 19 }
  imagepath = "https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg"
  mydate = new Date()

  hello(){
    this.title = "yash"
  }
}

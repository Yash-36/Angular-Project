import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = "yash chandra"
  imagepath = "https://darshan.ac.in/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg"
  tododesc = "I am Demo"

  hello(){
    this.title = "yash"
  }
}

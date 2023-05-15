import { Component } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.css']
})
export class FatherComponentComponent {
  fatherName: string = 'Rodrigo'
  objectUser = {
    age: 27,
    email: 'rodrigo@example.com',
  }
}

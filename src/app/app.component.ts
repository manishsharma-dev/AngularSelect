import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSelect';
  ADUserList : any = [];
  selectedUser:any;
  onUserSelect($event){

  }
}

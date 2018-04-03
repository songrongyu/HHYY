import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  item='';
  constructor() { }
  @Input() listart
  ngOnInit() {
  }
  add(e){
   if(e.keyCode == 13){
    this.listart.push(this.item);
    this.item="";
   }
  }

}

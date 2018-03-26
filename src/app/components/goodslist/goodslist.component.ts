import { Component, OnInit, Input } from '@angular/core';
import { Http,Jsonp} from '@angular/http';
import { Headers } from '@angular/http';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public http:Http,public jsonp:Jsonp) { 

  }
  @Input() list:Array<any>;
  // list:number[]= [1,2,3,4,5];
  headers = new Headers({'Content-Type':'application/x-www-from-urlencoded'});
  ngOnInit() {
    // this.http.get('http://datainfo.duapp.com/shopdata/getclass.php').subscribe(data=>{
    //   console.log(JSON.parse(data[' _body']));
    //   this.list = JSON.parse(data[' _body']);
    // },err=>{
    //   console.log(err);
    // });
    
    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.list = data['_body']
    },err=>{
      console.log(err)
    });

    // this.http.post('http://datainfo.duapp.com/shopdata/getClass.php', JSON.stringify({}),{headers:this.headers}).subscribe(data=>{
    //   console.log(data);
    // },err=>{
    //   console.log(err);
    // });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-component05',
  templateUrl: './my-component05.component.html',
  styleUrls: ['./my-component05.component.less']
})
export class MyComponent05Component {

  //用户输入密码
  password : string = '';

  //提示
  prompt : number = -1;

  //监听用户输入的密码
  passwordChange(){
    if(this.password.length < 6){
       this.prompt = 0;
    }else if(this.password.length < 12) {
       this.prompt = 1;
    }else{
       this.prompt = 2;
    }
  }








}

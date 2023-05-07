import { Component } from '@angular/core';

@Component({
  selector: 'my-component03',
  templateUrl: './my-component03.component.html',
  styleUrls: ['./my-component03.component.less']
})
export class MyComponent03Component {

  //MVVM : Model 模型数据

  //在模板文件中使用 {{ }} 绑定数据
  name  = 'Yui_Aragaki';
  age = 32;

  //定义每次点击减少按钮减少的个数
  // count = 1;

  //测试指令 循环绑定 *ngFor
  starLists  = ['新垣结衣','斋藤飞鸟','铃木爱理','桥本环奈','滨边美波'];

  //测试指令 选择绑定 *ngIf
  //当前用户是否为付费用户
  isPaingUser = true;//为 false 时不可见付费内容


  reduce(count : number){
    this.age -= count;
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'my-component04',
  templateUrl: './my-component04.component.html',
  styleUrls: ['./my-component04.component.less']
})
export class MyComponent04Component {

  //是否有更多数据
  hasMore = true;

  //加载数据
  loadMore(){
    //执行异步加载数据操作
    // ...
    this.hasMore = false;
  }

  //样式绑定对象
  //不推荐将样式写在 ts脚本里面
  //根据高内聚低耦合的原则样式应该和脚本分离 ，将样式抽取出来放在 .css文件中
  ngStyleObject = {
    backgroundColor : '#383',
    color : '#910',
    'border-color' : '#4f4'
  }

  //点击事件 ，改变样式
  //不推荐将样式写在此处
  changeNgStyle() {
    this.ngStyleObject.backgroundColor = '#010'
    this.ngStyleObject.color = '#11f'
    this.ngStyleObject["border-color"]= '#349'
  }

  // 测试 [ngClass]
  // [ngClass]绑定一个对象  ，对象中属性是样式class名 ， 属性值为 true/false（代表是否启用）
  // 绑定的 Css class 的样式（css文件中有这些 class）
  ngClassObject = {
    btn : true,
    'btn-danger' : false,  //烤串法则
    'btn-success' : true   //如果样式都为 true ， 则游览器默认最后为 true 的样式覆盖掉前面
  }

  // 点击事件改变 [ngClass]样式绑定
  changeNgClass(){
    this.ngClassObject["btn"] = true;
    this.ngClassObject["btn-danger"] = true;
    this.ngClassObject["btn-success"] = false;
  }

  // 测试 [ngSwitch] : 创建变量保存银行储户级别
  userLevel = "normal";
  // userLevel = "vip";
  // userLevel = "blackgold";


  //测试 [(ngModel)] 双向数据绑定
  userName = "Yui Aragaki";






}

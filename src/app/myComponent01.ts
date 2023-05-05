import {Component} from "@angular/core";


//组件 = 模板 + 脚本 + 样式
//装饰器（Decorator） : 用于指定class的用途 ， 本质是函数

//组件可以当成属性使用 ， 也可以直接当成HTML元素使用 ， 取决于selector的定义
//<div myC="xxx"</div>
//<myC></myC>

@Component({
  //如果当成属性用 ，就使用中括号 [] , 如果当成HTML元素使用 ， 就不要加中括号
  selector : 'myC', //selector : '[myC]'
  template : '<h2>这是我注册过的组件myComponent01,在app.component.html中使用HTML元素标签</h2><app-myc></app-myc>'
})
export class myComponent01 {

}

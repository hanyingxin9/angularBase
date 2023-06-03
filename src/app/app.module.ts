import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {myComponent01} from "./myComponent01";
import {MyComponent02Component} from "./myComponent02.component";
import { MyComponent03Component } from './my-component03/my-component03.component';
import { MyComponent04Component } from './my-component04/my-component04.component';
import {FormsModule} from "@angular/forms";
import { MyComponent05Component } from './my-component05/my-component05.component';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({ // 表示是模块而非组件
  declarations: [ // 声明组件
    AppComponent,
    myComponent01, //将创建的组件注册到模块中
    MyComponent02Component,
    MyComponent03Component,
    MyComponent04Component,
    MyComponent05Component,
    MyDirectiveDirective //注册的自定义指令
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //引导启动主组件
})
export class AppModule { }

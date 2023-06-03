import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[MyDirective]' //指令中只有selector ， 没有模板和样式文件
})
export class MyDirectiveDirective {

  //构造器
  constructor(el : ElementRef ) {

     console.log("需要强调指令实例化一次");
     el.nativeElement.style.background = '#fcc';
     el.nativeElement.style.padding = '10px';
     el.nativeElement.style.color = '#833';
  }

}

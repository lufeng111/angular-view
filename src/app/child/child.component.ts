import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*
  greeting 写在子组件的方法，传进来参数是name, name 的类型是string, 这个方法由父组件调用
  调用方式有两种：
  1：在父组件控制器里用typescript 代码调用
  2：在父组件的模板中用模板的变量

  */
  greeting(name: string) {
    console.log("hello"+ name);
  }

}

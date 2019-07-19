import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*
  1: 现在在父组件的控制器里，声明一个装饰器@ViewChild()装饰一个变量，这个装饰器的属性可以是字符串"child1",
  2: 可以通过@ViewChild() 装饰器，在父组件中获得子组件的引用，获得子组件的引用后，就可以在父组件任意的方法里，
      去调用子组件的引用，
  3:  在这段代码里，angular通过父组件的模板变量@ViewChild("child1")找到子组件ChildComponent，并把组件赋值给变量child1:ChildComponent;


*/
export class AppComponent implements OnInit {

  @ViewChild("child1")
  child1:ChildComponent;

  constructor(){}

  ngOnInit(): void {
    this.child1.greeting("Tom");
  }
}

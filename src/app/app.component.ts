import { Component, OnInit, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
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

  4: AfterViewInit 和 AfterContentChecked 这两个钩子是在组件的模板所有的内容都被组装完成以后，呈现给用户看了这两个方法才会被调用，


*/

/*
AfterViewInit 和 AfterContentChecked 需要注意的地方
  1：AfterViewInit 和 AfterContentChecked 这两个钩子是在组件的模板所有的内容都被组装完成以后，呈现给用户看了这两个方法才会被调用，
  2：AfterViewInit 调用在AfterContentChecked之前，而且 AfterViewInit 只被调用一次，
  3：不能再视图被组装完成之后在两个钩子里更新视图，要不然会抛出异常，解决这个问题：可以在定时器里更新视图
  4： 初始化 更新视图调用一次 ngAfterViewInit 和 ngAfterContentChecked ，以后每一次更新视图就只会调用 ngAfterContentChecked


*/
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked{

  message: string;

  ngAfterViewInit(): void {
    console.log("父组件的视图初始化完毕");
    // this.message = "hello"
  }

  ngAfterContentChecked(): void {
    console.log("父组件的视图变更检测完毕");
    // this.message = "hello"
    setTimeout(()=>{
      this.message = "hello";
    },1000);
  }

  @ViewChild("child1")
  child1:ChildComponent;

  constructor(){}

  ngOnInit(): void {
    // 每隔5秒更新一次视图，就会调用一次ngAfterContentChecked
    setInterval(()=>{
      this.child1.greeting("Tom");
    },5000);

  }
}
